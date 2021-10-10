import React, { Component, useRef, useEffect } from "react";
import * as S from '../../styles/detail.Style';
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import Router from 'next/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

export default class Detail extends Component {

    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
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
        }
    }

    render(){

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            vertical : true,
        };

        return (
            <S.box>
                <S.container>
                    <Slider {...settings} ref={slider => this.slider = slider}>
                        <S.content>
                            <span>
                                <ReactPlayer
                                    url={this.props.item.video}
                                    playing={true} 
                                    loop={false} 
                                    muted={true}
                                    controls={true}
                                    width="1152px"
                                    height="648px"
                                />
                                <S.timeStamp>
                                    <span>{this.props.item.time}</span>
                                    <span>{this.props.item.timeStamp}</span>
                                </S.timeStamp>
                            </span>
                        </S.content>
                        <S.content>
                            <div>{this.props.item.name}</div>
                            <div>{this.props.item.skill}</div>
                            <div>{this.props.item.roll}</div>
                            <div>
                                <a href={this.props.item.git} target="_blank">
                                    <FontAwesomeIcon icon={["fab", "github"]} />
                                    깃허브
                                </a>
                            </div>
                            <div>
                                <a href={this.props.item.deploy} target="_blank">
                                    <FontAwesomeIcon icon={faGlobe} />
                                    웹사이트
                                </a>
                            </div>
                        </S.content>
                        <S.content>
                            <iframe src={this.props.item.deploy} width="1152px" height="648px"/>
                            <button type="button" onClick={() => Router.back()}>뒤로가기</button>
                        </S.content>
                    </Slider>
                </S.container>
            </S.box>
        )
    }
}

// export default Detail;