import Head from 'next/head';
import Header from './Header';
import '../../styles/globals.css';
import 'react-awesome-button/src/styles/styles.scss';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gabriels || Dev </title>
      </Head>

      <Header/>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp
