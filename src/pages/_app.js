// pages/_app.js
import Head from 'next/head';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
