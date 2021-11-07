import React, { useRef, useEffect, useState } from 'react';
import project from '../../src/project.json';
import * as S from '../../styles/project.Style';
import { v4 as uuid } from "uuid";
import Project from './project';


const Projects = (props) => {

    const section = useRef();

    const [nav, setNav] = useState('home');

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

    useEffect(() => {
        if(typeof window !== 'undefined') {
            if(localStorage.getItem('nav')) {
                setNav(localStorage.getItem('nav'));
            }
        }
    }, [nav]);

    return (
        <>
            <S.section ref={section} nav={nav}>
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