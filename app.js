const express = require('express')
const compression = require('compression')  
const path = require('path')
const next = require('next')


const dev = process.env.NODE_ENV == 'dev'
const port = dev ? 3000 : 8080
const app = next({ dev })
const handle = app.getRequestHandler()

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .init({
    fallbackLng: 'es',
    preload: ['es', 'en'], // preload all langages
    ns: ['common', 'seo'], // need to preload all the namespaces
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
    }
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express()
        server.use(compression()) 
        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n))

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')))

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        // use next.js
        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
          if (err) throw err;
          console.log(`> Ready on http://localhost:${port}`);
        })
      })
  })
