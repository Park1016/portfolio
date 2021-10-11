import React, { Component, useRef, useEffect } from "react";
import * as S from '../../styles/detail.Style';
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import Router from 'next/router';
import * as Slide from '../../styles/slide.style';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import project from '../../src/project.json';

export default class Detail extends Component {

    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
        this.state = {
            num: 0,
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
    componentWillMount(){
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

        
        if (typeof window !== 'undefined') {
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
            dotsClass: "dots",
            customPaging: function(i) {
                return (
                    <p>{text[i]}</p>
                );
            },
        };

        return (
            <S.box>
                <S.container>
                    <button type="button" onClick={() => Router.back()}>뒤로가기</button>
                    <Slide.Slider {...settings} ref={slider => this.slider = slider}>
                        <S.content>
                            <span>
                                <ReactPlayer
                                    url={id ? project.project[id].video : project.project[this.state.num].video}
                                    playing={true} 
                                    loop={false} 
                                    muted={true}
                                    controls={true}
                                    width="1152px"
                                    height="648px"
                                />
                                <S.timeStamp>
                                    <span>{id ? project.project[id].time : project.project[this.state.num].time}</span>
                                    <span>{id ? project.project[id].timeStamp : project.project[this.state.num].timeStamp}</span>
                                </S.timeStamp>
                            </span>
                        </S.content>
                        <S.content>
                            <div>{id ? project.project[id].name : project.project[this.state.num].name}</div>
                            <div>{id ? project.project[id].num : project.project[this.state.num].num}</div>
                            <div>{id ? project.project[id].skill : project.project[this.state.num].skill}</div>
                            <div>{id ? project.project[id].roll : project.project[this.state.num].roll}</div>
                            <div>
                                <a href={id ? project.project[id].git : project.project[this.state.num].git} target="_blank">
                                    <FontAwesomeIcon icon={["fab", "github"]} />
                                    깃허브
                                </a>
                            </div>
                            <div>
                                <a href={id ? project.project[id].deploy : project.project[this.state.num].deploy} target="_blank">
                                    <FontAwesomeIcon icon={faGlobe} />
                                    웹사이트
                                </a>
                            </div>
                        </S.content>
                        <S.content>
                            <iframe src={id ? project.project[id].deploy : project.project[this.state.num].deploy} width="1152px" height="648px"/>
                        </S.content>
                    </Slide.Slider>
                </S.container>
            </S.box>
        )
    }
}