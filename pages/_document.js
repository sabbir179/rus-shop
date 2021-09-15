// THIS DOCUMENT IS USE: WHEN WE CHANGE THE MATERIAL UI CUSTOMISED 

import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <body>
                        <Main/>
                        <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        return originalRenderPage({
            // eslint-disable-next-line react/display-name
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });
    };
    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles), 
            sheets.getStyleElement(),
        ]
    }
}