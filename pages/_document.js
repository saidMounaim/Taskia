import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Taskia | Landing Page</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Header />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument