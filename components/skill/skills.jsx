import React from 'react';
import * as S from '../../styles/skills.Style';
import P from '../../styles/skills.module.css';

const Skills = (props) => {
    return (
        <S.section>
            <S.title>Skill</S.title>
            <ul className={P.images}>
                <li>
                    <S.top>Basic</S.top>
                    <div id={P.html} />
                    <p>Html</p>
                    <div id={P.css} />
                    <p>Css</p>
                    <div id={P.js} />
                    <p>JavaScript</p>
                </li>
                <li>
                    <S.top>Css</S.top>
                    <div id={P.postCss} />
                    <p>PostCss</p>
                    <div id={P.styledCp} />
                    <p>Styled<br />Component</p>
                </li>
                <li>
                    <S.top>Library</S.top>
                    <div id={P.react} />
                    <p>React</p>
                    <div id={P.redux} />
                    <p>Redux</p>
                </li>
                <li>
                    <S.top>Firebase</S.top>
                    <div id={P.firebase} />
                    <p>Firebase</p>
                </li>
                <li>
                    <S.top>SCM</S.top>
                    <div id={P.git} />
                    <p>Git</p>
                    <div id={P.github} />
                    <p>GitHub</p>
                </li>
                <li>
                    <S.top>Deploy</S.top>
                    <div id={P.netlify} />
                    <p>Netlify</p>
                    <div id={P.vercel} />
                    <p>Vercel</p>
                </li>
                {/* <li id={P.next}></li> */}
            </ul>
        </S.section>
    )
}

export default Skills;