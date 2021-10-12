import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import * as S from '../../styles/project.Style';
import P from '../../styles/projects.module.css';
import Router from 'next/router';
import Detail from './detail';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub);

const Project = ({item}) => {

    const video = useRef();

    let [show, setShow] = useState(false);
    let [qs, setQs] = useState(false); 

    const onShow = () => {
        setShow(true);
    }

    const onHidden = () => {
        setShow(false);
    }

    const onDetail = () => {
        setQs(true);
        Router.push({
            pathname: `/project/${item.name}`,
            // query: { num: JSON.stringify(item.id)},
            query: { num: item.id },
        });
    }

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            localStorage.clear();
            sessionStorage.clear();
        }
    },[])


    return (
        <>
            <S.ul onMouseEnter={onShow} onMouseLeave={onHidden} show={show} onClick={onDetail}>
                <li>
                    <ReactPlayer
                        ref={video}
                        url={item.video}
                        // url={require('../../public/travel(자막).mp4')}
                        playing={show ? (qs ? false : true) : false} 
                        loop={true} 
                        muted={true}
                        width="24.75rem"
                        height="13rem"
                    />
                </li>
                {show && <li>{item.name}</li>}
                {show && <li>{item.num}</li>}
                {show && <li>{item.skill}</li>}
                {show && <li>{item.roll}</li>}
                {show && <li>
                    <a href={item.git} target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        깃허브
                    </a>
                </li>}
                {show && <li>
                    <a href={item.deploy} target="_blank">
                        <FontAwesomeIcon icon={faGlobe} />
                        웹사이트
                    </a>
                </li>}
                {show &&
                // <Link href={`/project/${item.name}`}><a>상세보기</a></Link>}
                <button type="button" onClick={onDetail}>상세보기</button>}
            </S.ul>
        </>
    )
}

export default Project;