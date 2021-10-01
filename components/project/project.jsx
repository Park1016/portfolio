import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import * as S from '../../styles/project.Style';
import P from '../../styles/projects.module.css';
import Router from 'next/router';
import Detail from './detail';

const Project = ({item}) => {

    const video = useRef();

    let [show, setShow] = useState(false);
    let [qs, setQs] = useState(false); 

    const onShowGif = () => {
        setShow(true);
    }

    const onHiddenGif = () => {
        setShow(false);
    }

    const onDetail = () => {
        setQs(true);
        // Router.push(`/project?${item.name}`);
    }


    return (
        <section onMouseEnter={onShowGif} onMouseLeave={onHiddenGif}>
            <ul>
                <li>
                    <ReactPlayer
                        ref={video}
                        url={require('../../public/test2.mp4')}
                        playing={show ? (qs ? false : true) : false} 
                        loop={true} 
                        muted={true}
                        width="500px"
                        height="400px"
                    />
                </li>
                <li>{item.name}</li>
                <li>{item.skill}</li>
                <li>{item.roll}</li>
                <li>
                    <a href={item.git} target="_blank">깃허브</a>
                </li>
                <li>
                    <a href={item.deploy} target="_blank">배포주소</a>
                </li>
                {show && <button type="button" onClick={onDetail}>상세보기</button>}
            </ul>
            {qs && <Detail item={item} setQs={setQs}/>}
        </section>
    )
}

export default Project;