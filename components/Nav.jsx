import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

    const onHome = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('page', 'home');
        }
    }

    const onProject = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('page', 'project');
        }
    }

    const onToggle = () => {
        setToggle(!toggle);
    }

    const onClick = (e) => {
        const target = e.target.textContent;
        switch (target) {
            case 'HOME' :
                localStorage.setItem('nav', 'home');
                break;
            case 'About Me':
                localStorage.setItem('nav', 'aboutMe');
                break;
            case 'Project' :
                localStorage.setItem('nav', 'project');
                break;
            case 'Skill':
                localStorage.setItem('nav', 'skill');
                break;
            case 'Contact':
                localStorage.setItem('nav', 'contact');
                break;
        }
    }

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
                    <p>HJ Park&apos;s Portfolio</p>
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