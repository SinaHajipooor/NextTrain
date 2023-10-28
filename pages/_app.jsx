import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <title>default title</title>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
