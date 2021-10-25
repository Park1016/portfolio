import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import Link from 'next/link';
import * as S from '../../styles/project.Style';
import P from '../../styles/projects.module.css';
import Router from 'next/router';
import Image from 'next/image'
import Detail from './detail';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faGithub);

const Project = ({item}) => {

    const video = useRef();
    const img = useRef();

    let [lender, setLender] = useState(false);
    let [start, setStart] = useState(false);
    let [show, setShow] = useState(false);
    let [qs, setQs] = useState(false); 

    const onShow = () => {
        setShow(true);
        img.current.style.display = 'none';
    }

    const onHidden = () => {
        setShow(false);
        img.current.style.display = 'block';
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
        setStart(true);
        let timer = setTimeout(()=>{
            setStart(false);
        }, 3000)
        return () => {
            clearTimeout(timer);
        };
    },[]);


    return (
        <>
            <S.box
                onMouseEnter={onShow}
                onMouseLeave={onHidden}
                show={show}
                onClick={onDetail}
                className={item.id === '0' ? 'first' : item.id === '1' ? 'second' : item.id === '2' ? 'third' : item.id === '3' && 'fourth'}
            >
                {/* <div>
                    <ReactPlayer
                        ref={video}
                        url={item.video}
                        playing={show ? (qs ? false : true) : false} 
                        loop={true} 
                        muted={true}
                        width="24.75rem"
                        height="13rem"
                        position="relative"
                    />
                    <S.over ref={img}>
                        <Image 
                            src={item.img}
                            width={388}
                            height={210}
                            onClick={onDetail}
                        />
                    </S.over>
                </div> */}
                <S.over ref={img}>
                    <Image 
                        src={item.img}
                        width={388}
                        height={210}
                        onClick={onDetail}
                    />
                </S.over>
                <S.textArea>
                    <li>{item.name}</li>
                    <li>{item.num}</li>
                    <li>{item.skill}</li>
                    {/* <li>
                        <a href={item.git} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            깃허브
                        </a>
                        <a href={item.deploy} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGlobe} />
                            웹사이트
                        </a>
                    </li> */}
                </S.textArea>
                {/* {show && */}
                <S.modal
                    show={show}
                    className={item.id === '0' ? 'first' : item.id === '1' ? 'second' : item.id === '2' ? 'third' : item.id === '3' && 'fourth'}
                >
                    <ReactPlayer
                        ref={video}
                        url={item.video}
                        playing={start ? true : (show ? (qs ? false : true) : false)} 
                        loop={true} 
                        muted={true}
                        width="24.75rem"
                        height="13rem"
                        position="relative"
                    />
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.num}</li>
                        <li>{item.skill}</li>
                        <li>
                            <a href={item.git} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={["fab", "github"]} />
                                깃허브
                            </a>
                            <a href={item.deploy} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGlobe} />
                                웹사이트
                            </a>
                        </li>
                    </ul>
                    <button type="button" onClick={onDetail}>상세보기</button>
                </S.modal>
                {/* } */}
            </S.box>
        </>
    )
}

export default Project;