// pages/_app.js
import React from "react"
import {initStore} from '../redux'
import {Provider} from "react-redux"
import App, {Container} from "next/app"
import withRedux from "next-redux-wrapper"

class MyApp extends App {

    constructor(props) {
        super(props);
    }

    render() {
        const {Component, pageProps, store} = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }

}

export default withRedux(initStore)(MyApp)