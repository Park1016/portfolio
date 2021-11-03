import React, { Component, useRef, useEffect } from "react";
import * as S from '../../styles/detail.Style';
import Slider from "react-slick";
import ReactPlayer from 'react-player/lazy';
import Router from 'next/router';
import Image from 'next/image';
import * as Slide from '../../styles/slide.style';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import p from '../../src/project.json';

library.add(
    faGithub,
    faGlobe,
    faChevronDown
);

export default class Detail extends Component {

    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
        this.state = {
            num: 0,
            slideIndex: 0,
            loading: true,
        }
    }
    slide(y){
        if(this.slider){
            y > 0 ? (
                this.slider.slickPrev()
            ) : (
                this.slider.slickNext()
            )
        }
    }
    UNSAFE_componentWillMount(){
        if (typeof window !== "undefined") {
            window.addEventListener('wheel', (e) => {
                this.slide(e.wheelDelta);
            })
            const lsId = localStorage.getItem('num');
            this.setState({ num: lsId});
        }
    }


    render(){

        const text = ['Video', 'Info', 'View'];

        const id = this.props.id;

        if (typeof window !== 'undefined' && id) {
            localStorage.setItem('num', id);
        }

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            vertical : true,
            lazyLoad: true,
            dotsClass: "dots",
            customPaging: function(i) {
                return (
                    <p>{text[i]}</p>
                );
            },
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };

        const goBack = () => {
            sessionStorage.setItem('scroll', true);
            if (typeof window !== 'undefined') {
                if(localStorage.getItem('page') === 'home'){
                    Router.push('/');
                } else {
                    Router.push('/project');
                } 
            }
        }

        const onLoading = () => {
            this.setState({ loading: false });
        }

        if(!id){
            return <h1>no post</h1>
        }

        return (
            <S.box>
                <S.container>
                    <button type="button" onClick={goBack}>뒤로가기</button>
                    <S.alert page={this.state.slideIndex}>
                        <p>Scroll</p>
                        <p><FontAwesomeIcon icon={faChevronDown} /></p>
                    </S.alert>
                    <Slide.Slider {...settings} ref={slider => this.slider = slider}>
                        <S.content className="detailFirst">
                            <S.contentInner className="detailFirst">
                                <S.Title className="video">🎞️ Video</S.Title>
                                <span>
                                    <ReactPlayer
                                        className="datailPlayer"
                                        url={id ? p.project[id].video : p.project[this.state.num].video}
                                        playing={true} 
                                        loop={false} 
                                        muted={true}
                                        controls={true}
                                        width="921px"
                                        height="518px"
                                    />
                                    <S.timeStamp id={id || this.state.num}>
                                        <p>{id ? p.project[id].timeText : p.project[this.state.num].timeText}</p>
                                        <span>{id ? p.project[id].time : p.project[this.state.num].time}</span>
                                        <span>{id ? p.project[id].timeStamp : p.project[this.state.num].timeStamp}</span>
                                    </S.timeStamp>
                                </span>
                            </S.contentInner>
                        </S.content>
                        <S.content className="detailSecond">
                            <S.contentInner className="detailSecond" id={id || this.state.num}>
                                <S.Title className="info">📃Info</S.Title>
                                <S.detailUl id={id || this.state.num}>
                                    <li><div>프로젝트명</div><div>{id ? p.project[id].name : p.project[this.state.num].name}</div></li>
                                    <li><div>소개글</div>{id ? p.project[id].info.replace(/(?:\r\n|\r|\n)/g, '\n') : p.project[this.state.num].info.replace(/(?:\r\n|\r|\n)/g, '\n')}</li>
                                    <li><div>개발인원</div><div>{id ? p.project[id].num : p.project[this.state.num].num}</div></li>
                                    {id ? <li><div>기술스택</div><div>{p.project[id].skill.map((item, index)=>(<p key={index}>{item}</p>))}</div></li>
                                    : <li><div>기술스택</div><div>{p.project[this.state.num].skill.map((item, index)=>(<p key={index}>{item}</p>))}</div></li>}
                                    {id ? <li><div>담당업무</div><div>{p.project[id].roll.map((item, index)=>(<p key={index}>{item.map((i, index)=>(<span key={index}>{i.replace(/(?:\r\n|\r|\n)/g, '\n')}</span>))}</p>))}</div></li> :
                                    <li><div>담당업무</div><div>{p.project[this.state.num].roll.map((item, index)=>(<p key={index}>{item.map((i, index)=>(<span key={index}>{i.replace(/(?:\r\n|\r|\n)/g, '\n')}</span>))}</p>))}</div></li>}
                                    <li>
                                        <a href={id ? p.project[id].git : p.project[this.state.num].git} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={["fab", "github"]} />
                                            <span>깃허브</span>
                                        </a>
                                        <a href={id ? p.project[id].deploy : p.project[this.state.num].deploy} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGlobe} />
                                            <span>웹사이트</span>
                                        </a>
                                    </li>
                                </S.detailUl>
                            </S.contentInner>
                        </S.content>
                        <S.content className="detailThird">
                            <S.contentInner className="detailThird">
                                <S.Title className="view">💡 View</S.Title>
                                {this.state.loading && <S.loading>
                                    <Image 
                                        src="/loading2.svg"
                                        alt="loading"
                                        width={200}
                                        height={200}
                                    />
                                </S.loading>}
                                <iframe src={id ? p.project[id].deploy : p.project[this.state.num].deploy} width="1094px" height="615px" onLoad={onLoading}/>
                            </S.contentInner>
                        </S.content>
                    </Slide.Slider>
                </S.container>
            </S.box>
        )
    }
};

