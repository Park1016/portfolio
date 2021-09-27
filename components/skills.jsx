import React from 'react';
import S from '../styles/skills.module.css';

const Skills = (props) => {
    return (
        <ul className={S.images}>
            <li id={S.html}></li>
            <li id={S.css}></li>
            <li id={S.js}></li>
            <li id={S.react}></li>
            <li id={S.redux}></li>
            <li id={S.next}></li>
            <li id={S.firebase}></li>
            <li id={S.git}></li>
            <li id={S.github}></li>
            <li id={S.vercel}></li>
        </ul>
    )
}

export default Skills;