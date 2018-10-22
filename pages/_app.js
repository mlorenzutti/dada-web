// pages/_app.js
import React from "react"
import {initStore} from '../redux'
import {Provider} from "react-redux"
import App, {Container,Head} from "next/app"
import { NamespacesConsumer, I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../i18n'
import withRedux from "next-redux-wrapper"
import Router from "next/router"
import withGA from "next-ga"

import "../style/style.scss"

class MyApp extends App {

    constructor(props) {
        super(props);
    }

    render() {
        const {Component, pageProps, store} = this.props
        const { i18n, initialI18nStore, initialLanguage } = pageProps || {}
        return (
            <Container>
                
                <Provider store={store}>
                    <I18nextProvider
                    i18n={i18n || initialI18nInstance}
                    initialI18nStore={initialI18nStore}
                    initialLanguage={initialLanguage}
                    >
                    <React.Fragment>
                        <Component {...pageProps} />
                    </React.Fragment>
                    </I18nextProvider>
                </Provider>
            </Container>
        )
    }

}

MyApp = withGA("UA-114853800-2", Router)(MyApp)

export default withRedux(initStore)(MyApp)