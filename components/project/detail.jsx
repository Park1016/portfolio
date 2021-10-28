import React, { Component, useRef, useEffect } from "react";
import * as S from '../../styles/detail.Style';
import Slider from "react-slick";
import ReactPlayer from 'react-player/lazy';
import Router from 'next/router';
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

        const text = ['시연영상', '설명', 'view'];

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
            Router.back();
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
                                <span>
                                    <ReactPlayer
                                        url={id ? p.project[id].video : p.project[this.state.num].video}
                                        playing={true} 
                                        loop={false} 
                                        muted={true}
                                        controls={true}
                                        width="921px"
                                        height="518px"
                                    />
                                    <S.timeStamp>
                                        <span>{id ? p.project[id].time : p.project[this.state.num].time}</span>
                                        <span>{id ? p.project[id].timeStamp : p.project[this.state.num].timeStamp}</span>
                                    </S.timeStamp>
                                </span>
                            </S.contentInner>
                        </S.content>
                        <S.content className="detailSecond">
                            <S.contentInner className="detailSecond">
                                <div>{id ? p.project[id].name : p.project[this.state.num].name}</div>
                                <div>{id ? p.project[id].num : p.project[this.state.num].num}</div>
                                <div>{id ? p.project[id].skill : p.project[this.state.num].skill}</div>
                                <div>{id ? p.project[id].roll : p.project[this.state.num].roll}</div>
                                <div>
                                    <a href={id ? p.project[id].git : p.project[this.state.num].git} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={["fab", "github"]} />
                                        깃허브
                                    </a>
                                </div>
                                <div>
                                    <a href={id ? p.project[id].deploy : p.project[this.state.num].deploy} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGlobe} />
                                        웹사이트
                                    </a>
                                </div>
                            </S.contentInner>
                        </S.content>
                        <S.content className="detailThird">
                            <S.contentInner className="detailThird">
                                <iframe src={id ? p.project[id].deploy : p.project[this.state.num].deploy} width="1094px" height="615px"/>
                            </S.contentInner>
                        </S.content>
                    </Slide.Slider>
                </S.container>
            </S.box>
        )
    }
};

