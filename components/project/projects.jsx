import React from 'react';
import project from '../../src/project.json';
import * as S from '../../styles/project.Style';
import ReactPlayer from 'react-player';
import { v4 as uuid } from "uuid";
import Project from './project';


const Projects = (props) => {

    return (
        <>
            <S.section>
                <S.div>
                    <S.text><span>🚀</span><span>PROJECT</span></S.text>
                    {project.project.map((item)=>(
                        <Project key={uuid()} item={item} />
                        ))}
                </S.div>
                {/* <S.text><span>P</span><span>R</span><span>O</span><span>J</span><span>E</span><span>C</span><span>T</span></S.text> */}
            </S.section>
        </>
    )
}

export default Projects;