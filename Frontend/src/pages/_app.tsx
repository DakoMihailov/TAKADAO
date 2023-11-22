import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Layout from '@/common/layouts'
import '@/common/styles/global.css'
import { Fragment } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>TAKADAO</title>
        <link rel="shortcut icon" type="image/x-icon" href="/TAKADAI.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App
