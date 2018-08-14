// pages/_app.js
import React from "react"
import {initStore} from '../redux'
import {Provider} from "react-redux"
import App, {Container} from "next/app"
import withRedux from "next-redux-wrapper"

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../utils/getPageContext'

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/

class MyApp extends App {

    constructor(props) {
        super(props);
        this.pageContext = getPageContext()
    }

    pageContext = null

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps, store} = this.props
        return (
            <Container>
                <Provider store={store}>
                    <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                    >
                        {/* MuiThemeProvider makes the theme available down the React
                        tree thanks to React context. */}
                        <MuiThemeProvider
                            theme={this.pageContext.theme}
                            sheetsManager={this.pageContext.sheetsManager}
                        >
                            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                            <CssBaseline />
                            {/* Pass pageContext to the _document though the renderPage enhancer
                                to render collected styles on server side. */}
                            <Component pageContext={this.pageContext} {...pageProps} />
                        </MuiThemeProvider>
                    </JssProvider>
                </Provider>
            </Container>
        )
    }

}

export default withRedux(initStore)(MyApp)