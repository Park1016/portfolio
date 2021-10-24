import Link from 'next/link'
import { useRouter } from 'next/router';
import Style from '../styles/Nav.module.css';
import * as S from '../styles/nav.style';

const Nav = (props) => {

    const router = useRouter();

    return (
        <S.nav>
            <ul>
                <li>
                    <Link href="/aboutMe">
                        <a style={{color : '/aboutMe' === router.pathname ? '#737373' : '#E1B1B1'}}>About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skill">
                        <a style={{color : '/skill' === router.pathname ? '#737373' : '#E1B1B1'}}>Skill</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a style={{color : '/' === router.pathname ? '#737373' : '#E1B1B1'}}>HOME</a>
                    </Link>
                </li>
                <li>
                    <Link href="/project">
                        <a style={{color : '/project' === router.pathname ? '#737373' : '#E1B1B1'}}>Project</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a style={{color : '/contact' === router.pathname ? '#737373' : '#E1B1B1'}}>Contact</a>
                    </Link>
                </li>
            </ul>
        </S.nav>
    )
}

export default Nav;