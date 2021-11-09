import React, { useRef, useEffect, useState } from 'react';
import project from '../../src/project.json';
import * as S from '../../styles/project.Style';
import { v4 as uuid } from "uuid";
import Project from './project';

import { useSelector, useDispatch } from 'react-redux';
import * as reducerActions from '../../store/reducer/reducerSlice';


const Projects = (props) => {

    const section = useRef();

    const [nav, setNav] = useState('home');

    const dispatch = useDispatch();
    const reducerSlice = useSelector(({ reducerSlice }) => reducerSlice.nav);

    const onMouseEnter = () => {
        if(section.current.clientWidth > 920 && section.current.clientHeight > 646){
            return;
        }
        // localStorage.setItem('projectScroll', 'project');
    }

    const onMouseLeave = () => {
        if(section.current.clientWidth > 920 && section.current.clientHeight > 646){
            return;
        }
        // localStorage.setItem('projectScroll', 'leave');
    }

    useEffect(() => {
        if(typeof window !== 'undefined') {
            setTimeout(() => {
                if(window.location.pathname === '/'){
                    setNav('home');
                } else {
                    setNav('project');
                }
            }, 500)
        }
    }, [nav]);

    return (
        <>
            <S.section ref={section} nav={nav}>
                <S.text nav={nav}><span>🚀</span><span>PROJECT</span></S.text>
                <S.div nav={nav} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {project.project.map((item)=>(
                        <Project key={uuid()} item={item} nav={nav}/>
                    ))}
                </S.div>
            </S.section>
        </>
    )
}

export default Projects;