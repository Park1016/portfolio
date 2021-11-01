import React from 'react';
import * as S from '../../styles/skills.Style';
import P from '../../styles/skills.module.css';

const Skills = (props) => {
    return (
        <S.section>
            <ul className={P.images}>
                <li>
                    <div id={P.html} />
                    <div id={P.css} />
                    <div id={P.js} />
                </li>
                <li>
                    <div id={P.postCss} />
                    <div id={P.styledCp} />
                </li>
                <li>
                    <div id={P.react} />
                    <div id={P.redux} />
                </li>
                <li>
                    <div id={P.firebase} />
                </li>
                <li>
                    <div id={P.git} />
                    <div id={P.github} />
                </li>
                <li>
                    <div id={P.netlify} />
                    <div id={P.vercel} />
                </li>
                {/* <li id={P.next}></li> */}
            </ul>
        </S.section>
    )
}

export default Skills;