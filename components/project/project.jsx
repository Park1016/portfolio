import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import * as S from '../../styles/project.Style';
import P from '../../styles/projects.module.css';
import Router from 'next/router';
import Detail from './detail';

const Project = ({item}) => {

    let [show, setShow] = useState(false);
    let [qs, setQs] = useState(false); 
    const [path, setPath] = useState("");

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

    useEffect(()=>{
        const arr = [];
        arr.push(item.gif);
        setPath(URL.createObjectURL(new File(arr, {type: "application/zip"})));
    }, []);

    return (
        <>
            <ul onMouseEnter={onShowGif} onMouseLeave={onHiddenGif}>
                <li>{item.name}</li>
                <li>{item.skill}</li>
                <li>{item.roll}</li>
                <li>
                    <a href={item.git} target="_blank">깃허브</a>
                </li>
                <li>
                    <a href={item.deploy} target="_blank">배포주소</a>
                </li>
                <S.gifLi show={show}>
                    <S.gif gif={item.gif}></S.gif>
                    {/* <ReactPlayer url={path} playing={true}/> */}
                    <button type="button" onClick={onDetail}>상세보기</button>
                </S.gifLi>
                {/* <li className={P.gif}></li> */}
            </ul>
            {qs && <Detail item={item}/>}
        </>
    )
}

export default Project;