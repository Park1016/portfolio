import Link from 'next/link';
import { useRouter } from 'next/router';
import Style from '../styles/Nav.module.css';
import * as S from '../styles/nav.style';

const Nav = (props) => {

    const router = useRouter();

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
            <ul>
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
            </ul>
        </S.nav>
    )
}

export default Nav;