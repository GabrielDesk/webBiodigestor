import Head from 'next/head';
import Header from './Header';
import '../../styles/globals.css';
import 'react-awesome-button/src/styles/styles.scss';
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Biodigestor site</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp
