import Nav from './Nav'
import Head from 'next/head'
import P from '../styles/layout.module.css';
import React, { useRef } from "react";
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

const Layout = ({ children }) => {
    library.add(
        faArrowCircleUp,
        faArrowCircleDown,
    );

    const top = useRef();
    const scrollUp = () => {
        top.current.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const scrollDown = () => {
        top.current.scrollTo({
            bottom: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <Head>
                <title>Park&apos;s portfolio</title>
                <meta keyword="portfolio" />
                <meta contents="portfolio" />
            </Head>
            <Nav />
            <article ref={top} className={P.article}>
                {/* <FontAwesomeIcon icon={faArrowCircleUp} onClick={scrollUp} />
                <FontAwesomeIcon icon={faArrowCircleDown} onClick={scrollDown} /> */}
                {children}
            </article>
        </>
    )
}

export default Layout;