import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import * as reducerActions from '../store/reducer/reducerSlice';

import Style from '../styles/Nav.module.css';
import * as S from '../styles/nav.style';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(
    faBars,
    faGithub,
    faEnvelope
);

const Nav = (props) => {

    const router = useRouter();

    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();
    const nav = useSelector(({ reducerSlice }) => reducerSlice.nav);
    const page = useSelector(({ reducerSlice }) => reducerSlice.page);

    const onHome = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('page', 'home');
            dispatch(reducerActions.pHome({ page }));
        }
    }

    const onProject = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('page', 'project');
            dispatch(reducerActions.pProject({ page }));
        }
    }

    const onToggle = () => {
        setToggle(!toggle);
    }

    const onClick = (e) => {
        const target = e.target.textContent;
        setToggle(false);
        switch (target) {
            case 'HOME' :
                localStorage.setItem('nav', 'home');
                dispatch(reducerActions.home({ nav }));
                break;
            case 'About Me':
                localStorage.setItem('nav', 'aboutMe');
                dispatch(reducerActions.aboutMe({ nav }));
                break;
            case 'Project' :
                localStorage.setItem('nav', 'project');
                dispatch(reducerActions.project({ nav }));
                break;
            case 'Skill':
                localStorage.setItem('nav', 'skill');
                dispatch(reducerActions.skill({ nav }));
                break;
            case 'Contact':
                localStorage.setItem('nav', 'contact');
                dispatch(reducerActions.contact({ nav }));
                break;
        }
        // console.log(nav);
    }


    // const navHome = useCallback(({ nav }) => {
    //     dispatch(reducerActions.home({ nav }));
    // }, [dispatch]);

    // const navSkill = useCallback(({ nav }) => {
    //     dispatch(reducerActions.skill({ nav }));
    // }, [dispatch]);

    // const navProject = useCallback(({ nav }) => {
    //     dispatch(reducerActions.project({ nav }));
    // }, [dispatch]);

    // const navAboutMe = useCallback(({ nav }) => {
    //     dispatch(reducerActions.aboutMe({ nav }));
    // }, [dispatch]);

    // const navContact = useCallback(({ nav }) => {
    //     dispatch(reducerActions.contact({ nav }));
    // }, [dispatch]);


    return (
        <S.nav>
            <S.ul>
                <li>
                    <Link href="/aboutMe">
                        <a style={{color : '/aboutMe' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>About Me</a>
                    </Link>
                </li>
                <li onClick={onProject}>
                    <Link href="/project">
                        <a style={{color : '/project' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>Project</a>
                    </Link>
                </li>
                <li onClick={onHome}>
                    <Link href="/">
                        <a style={{color : '/' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>HOME</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skill">
                        <a style={{color : '/skill' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>Skill</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a style={{color : '/contact' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>Contact</a>
                    </Link>
                </li>
                <li>
                    <a href="mailto:guohjp@gmail.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://github.com/Park1016" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </li>
                <li onClick={onToggle}>
                    <p><span>HJ Park&apos;s Portfolio</span></p>
                    <FontAwesomeIcon icon={faBars} />
                </li>
            </S.ul>
            {<S.toggle toggle={toggle}>
                    <li>
                        <Link href="/aboutMe">
                            <a style={{color : '/aboutMe' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>About Me</a>
                        </Link>
                    </li>
                    <li onClick={onProject}>
                        <Link href="/project">
                            <a style={{color : '/project' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>Project</a>
                        </Link>
                    </li>
                    <li onClick={onHome}>
                        <Link href="/">
                            <a style={{color : '/' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>HOME</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skill">
                            <a style={{color : '/skill' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>Skill</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a style={{color : '/contact' === router.pathname ? '#e2b646' : '#2D3748'}} onClick={e=>onClick(e)}>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:guohjp@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://github.com/Park1016" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </li>
            </S.toggle>}
        </S.nav>
    )
}

export default Nav;