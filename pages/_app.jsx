import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <Layout>
        <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <title>default title</title>
        </Head>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
