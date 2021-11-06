﻿import React, { useRef } from 'react';
import project from '../../src/project.json';
import * as S from '../../styles/project.Style';
import ReactPlayer from 'react-player';
import { v4 as uuid } from "uuid";
import Project from './project';
import Image from 'next/image';


const Projects = (props) => {

    const section = useRef();

    const onMouseEnter = () => {
        if(section.current.clientWidth > 920 && section.current.clientHeight > 646){
            return;
        }
        localStorage.setItem('projectScroll', 'project');
    }

    const onMouseLeave = () => {
        if(section.current.clientWidth > 920 && section.current.clientHeight > 646){
            return;
        }
        localStorage.setItem('projectScroll', 'leave');
    }

    return (
        <>
            <S.section ref={section}>
                <S.text><span>🚀</span><span>PROJECT</span></S.text>
                <S.div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {project.project.map((item)=>(
                        <Project key={uuid()} item={item} />
                    ))}
                </S.div>
            </S.section>
        </>
    )
}

export default Projects;