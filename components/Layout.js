import Nav from './Nav'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Park's portfolio</title>
                <meta keyword="portfolio" />
                <meta contents="portfolio" />
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;