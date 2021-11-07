import React, { useRef, useEffect, useState } from 'react';
import * as S from '../../styles/skills.Style';
import P from '../../styles/skills.module.css';


const Skills = (props) => {

    const section = useRef();

    const [nav, setNav] = useState('home');

    const onMouseEnter = () => {
        if(section.current.clientWidth > 674 && section.current.clientHeight > 557){
            return;
        }
        localStorage.setItem('skillScroll', 'skill');
    }

    const onMouseLeave = () => {
        if(section.current.clientWidth > 674 && section.current.clientHeight > 557){
            return;
        }
        localStorage.setItem('skillScroll', 'leave');
    }

    useEffect(() => {
        if(typeof window !== 'undefined') {
            if(localStorage.getItem('nav')) {
                setNav(localStorage.getItem('nav'));
            }
        }
    }, [nav]);

    return (
        <S.section ref={section}  nav={nav}>
            <S.title>Skill</S.title>
            <S.ul className={P.images} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <li>
                    <S.top>Basic</S.top>
                    <S.item>
                        <div id={P.html} />
                        <p>Html</p>
                    </S.item>
                    <S.item>
                        <div id={P.css} />
                        <p>Css</p>
                    </S.item>
                    <S.item>
                        <div id={P.js} />
                        <p>JavaScript</p>
                    </S.item>
                </li>
                <li>
                    <S.top>Firebase</S.top>
                    <S.item>
                        <div id={P.firebase} />
                        <p>Firebase</p>
                    </S.item>
                </li>
                <li>
                    <S.top>Library</S.top>
                    <S.item>
                        <div id={P.react} />
                        <p>React</p>
                    </S.item>
                    <S.item>
                        <div id={P.redux} />
                        <p>Redux</p>
                    </S.item>
                </li>
                <li>
                    <S.top>Css</S.top>
                    <S.item>
                        <div id={P.postCSS} />
                        <p>PostCss</p>
                    </S.item>
                    <S.item>
                        <div id={P.styledCp} />
                        <p>Styled<br />Component</p>
                    </S.item>
                </li>
                <li>
                    <S.top>SCM</S.top>
                    <S.item>
                        <div id={P.git} />
                        <p>Git</p>
                    </S.item>
                    <S.item>
                        <div id={P.github} />
                        <p>GitHub</p>
                    </S.item>
                </li>
                <li>
                    <S.top>Deploy</S.top>
                    <S.item>
                        <div id={P.netlify} />
                        <p>Netlify</p>
                    </S.item>
                    <S.item>
                        <div id={P.vercel} />
                        <p>Vercel</p>
                    </S.item>
                </li>
                {/* <li id={P.next}></li> */}
            </S.ul>
            <S.resDiv className={P.resImages}>
                <S.item>
                    <div id={P.html} />
                    <p>Html</p>
                </S.item>
                <S.item>
                    <div id={P.css} />
                    <p>Css</p>
                </S.item>
                <S.item>
                    <div id={P.js} />
                    <p>JavaScript</p>
                </S.item>
                <S.item>
                    <div id={P.react} />
                    <p>React</p>
                </S.item>
                <S.item>
                    <div id={P.redux} />
                    <p>Redux</p>
                </S.item>
                <S.item>
                    <div id={P.postCSS} />
                    <p>PostCss</p>
                </S.item>
                <S.item>
                    <div id={P.styledCp} />
                    <p>Styled<br />Component</p>
                </S.item>
                <S.item>
                    <div id={P.firebase} />
                    <p>Firebase</p>
                </S.item>
                <S.item>
                    <div id={P.git} />
                    <p>Git</p>
                </S.item>
                <S.item>
                    <div id={P.github} />
                    <p>GitHub</p>
                </S.item>
                <S.item>
                    <div id={P.netlify} />
                    <p>Netlify</p>
                </S.item>
                <S.item>
                    <div id={P.vercel} />
                    <p>Vercel</p>
                </S.item>
            </S.resDiv>
        </S.section>
    )
}

export default Skills;