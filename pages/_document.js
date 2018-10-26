import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <link href="https://fonts.googleapis.com/css?family=Nunito:300,700|Source+Sans+Pro:400,700" rel="stylesheet" />
        </Head>
        <body className="bg-light">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument