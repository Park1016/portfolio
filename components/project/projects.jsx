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
                    {project.project.map((item)=>(
                        <Project key={uuid()} item={item} />
                    ))}
                </S.div>
            </S.section>
        </>
    )
}

export default Projects;