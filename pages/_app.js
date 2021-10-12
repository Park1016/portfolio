import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/slide.css';
import '../styles/icon.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
