import React from 'react';
import * as S from '../../styles/skills.Style';
import P from '../../styles/skills.module.css';

const Skills = (props) => {
    return (
        <S.section>
            <ul className={P.images}>
                <li id={P.html}></li>
                <li id={P.css}></li>
                <li id={P.js}></li>
                <li id={P.react}></li>
                <li id={P.redux}></li>
                <li id={P.next}></li>
                <li id={P.firebase}></li>
                <li id={P.git}></li>
                <li id={P.github}></li>
                <li id={P.vercel}></li>
            </ul>
        </S.section>
    )
}

export default Skills;