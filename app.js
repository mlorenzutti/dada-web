const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV == 'dev';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = dev ? 3000 : 8080;

app.prepare().then(() => {
  const server = express();

  // If you need /:param/ type urls allow next and webpack urls - see: https://github.com/zeit/next.js/issues/1433
  //server.get(/next/, (req,res)=> { handle(req,res); });
  //server.get(/webpack/, (req,res)=> { handle(req,res); });

  server.get('/a/:slug/:id/', (req, res) => {
    return app.render(req, res, '/article', req.params)
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});