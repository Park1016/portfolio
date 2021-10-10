import '../styles/globals.css'
import Layout from '../components/Layout'
// import '@fortawesome/fontawesome-free/js/fontawesome';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
