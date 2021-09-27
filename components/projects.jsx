import React from 'react';
import project from '../src/project.json';
import S from '../styles/projects.module.css';
import test from '../assets/test.gif';

const Projects = (props) => {
    return (
        <>
            {project.project.map((item, index)=>(
                <ul key={index}>
                    <li>{item.name}</li>
                    <li>{item.skill}</li>
                    <li>{item.roll}</li>
                    <li>
                        <a href={item.git} target="_blank">깃허브</a>
                    </li>
                    <li>
                        <a href={item.deploy} target="_blank">배포주소</a>
                    </li>
                    <li className={S.gif}>

                    </li>
                </ul>
            ))}
        </>
    )
}

export default Projects;