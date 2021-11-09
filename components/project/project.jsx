import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
// import GifPlayer from 'react-gif-player';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import * as reducerActions from '../../store/reducer/reducerSlice';

import * as S from '../../styles/project.Style';
import P from '../../styles/projects.module.css';
import Router from 'next/router';
import Image from 'next/image';
import Detail from './detail';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faGithub);

const Project = ({item, nav}) => {

    const img = useRef();

    let [lender, setLender] = useState(false);
    let [start, setStart] = useState(false);
    let [show, setShow] = useState(false);
    let [qs, setQs] = useState(false); 

    const onShow = () => {
        setShow(true);
        // img.current.style.display = 'none';
    }

    const onHidden = () => {
        setShow(false);
        // img.current.style.display = 'block';
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
                nav={nav}
                onMouseEnter={onShow}
                onMouseLeave={onHidden}
                show={show}
                onClick={onDetail}
                className={item.id === '0' ? 'first' : item.id === '1' ? 'second' : item.id === '2' ? 'third' : item.id === '3' && 'fourth'}
            >
                <S.over
                    ref={img}
                    className={item.id === '0' ? 'first' : item.id === '1' ? 'second' : item.id === '2' ? 'third' : item.id === '3' && 'fourth'}
                >
                    <Image 
                        src={item.img}
                        width={388}
                        height={210}
                        onClick={onDetail}
                        className="projectImg"
                    />
                    <div>
                        <p>{item.name}</p>
                    </div>
                </S.over>
                <S.modal
                    show={show}
                    className={item.id === '0' ? 'first' : item.id === '1' ? 'second' : item.id === '2' ? 'third' : item.id === '3' && 'fourth'}
                >
                    <ul>
                        <li>
                            <Image 
                                src={item.gif}
                                alt="gif"
                                className="gif"
                                width="475.2"
                                height="250"
                                position="relative"
                            />
                        </li>
                        {/* <li /> */}
                    </ul>
                    <ul>
                        <li><span>이름</span><span>{item.name}</span></li>
                        <li><span>개발인원</span><span>{item.num}</span></li>
                        <li>
                            <span>skill</span>
                            <span>{item.skill.map((i, index)=>(
                                <p key={index}>{i}</p>
                            ))}</span>
                        </li>
                        <li>
                            <a href={item.git} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={["fab", "github"]} />
                                <span>깃허브</span>
                            </a>
                            <a href={item.deploy} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>웹사이트</span>
                            </a>
                            <button type="button" onClick={onDetail}>상세보기</button>
                        </li>
                    </ul>
                </S.modal>
            </S.box>
        </>
    )
}

export default Project;