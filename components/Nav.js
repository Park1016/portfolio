import Link from 'next/link'
import Style from '../styles/Nav.module.css'

const Nav = (props) => {
    return (
        <nav className={Style.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>about me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skill">
                        <a>skill</a>
                    </Link>
                </li>
                <li>
                    <Link href="/project">
                        <a>project</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;