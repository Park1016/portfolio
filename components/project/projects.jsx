import React from 'react';
import project from '../../src/project.json';
import { v4 as uuid } from "uuid";
import Project from './project';


const Projects = (props) => {

    return (
        <>
            {project.project.map((item)=>(
                <Project key={uuid()} item={item} />
            ))}
        </>
    )
}

export default Projects;