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
            <S.None>
                <ReactPlayer
                    url={require('../../public/mbti(자막).mp4')}
                    playing={false} 
                    muted={true}
                    width="0"
                    height ="0"
                />
                <ReactPlayer
                    url={require('../../public/movie(자막).mp4')}
                    playing={false} 
                    muted={true}
                    width="0"
                    height ="0"
                />
                <ReactPlayer
                    url={require('../../public/travel(자막).mp4')}
                    playing={false}  
                    muted={true}
                    width="0"
                    height ="0"
                />
            </S.None>
        </>
    )
}

export default Projects;