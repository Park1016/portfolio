import Head from 'next/head'

const HeadInfo = ({ title, keyword, contents }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta contents={contents} />
        </Head>
    )
}

HeadInfo.defaultProps = {
    title: 'portfolio',
    keyword: 'portfolio',
    contents: 'portfolio',
}

export default HeadInfo;