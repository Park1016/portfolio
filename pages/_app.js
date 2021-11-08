import { wrapper } from "../store";
import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/slide.css';
import '../styles/icon.css';
import '../styles/project.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);