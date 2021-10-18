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
                {/* <ReactPlayer
                    url='https://www.youtube/watch?v=zHvnPIbFr-k'
                    playing={false} 
                    muted={true}
                    width="0"
                    height ="0"
                />
                <ReactPlayer
                    url='https://www.youtube/watch?v=tpHGeJiywH0'
                    playing={false} 
                    muted={true}
                    width="0"
                    height ="0"
                />
                <ReactPlayer
                    url='https://www.youtube/watch?v=E1qkUKJi3Ho'
                    playing={false}  
                    muted={true}
                    width="0"
                    height ="0"
                /> */}
                <embed
                    src="https://www.youtube-nocookie.com/embed/watch?v=zHvnPIbFr-k"
                    width="0"
                    height ="0"
                />
                <embed
                    src="https://www.youtube-nocookie.com/embed/watch?v=tpHGeJiywH0"
                    width="0"
                    height ="0"
                />
                <embed
                    src="https://www.youtube-nocookie.com/embed/watch?v=E1qkUKJi3Ho"
                    width="0"
                    height ="0"
                />
            </S.None>
        </>
    )
}

export default Projects;