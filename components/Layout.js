import Nav from './Nav'
import Head from 'next/head'
import P from '../styles/layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Park's portfolio</title>
                <meta keyword="portfolio" />
                <meta contents="portfolio" />
            </Head>
            <Nav />
            <section className={P.section}>
                {children}
            </section>
        </>
    )
}

export default Layout;