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
import Loading from '../detailLoading';

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
            time: false,
            one: false,
            two: true,
            zero: false,
            loading: true
        }
    }
    slide(y){
        if (typeof window !== "undefined") {
            y > 0 ? (
                this.slider.slickPrev()
            ) : (
                this.slider.slickNext()
            )
        }
    }
    UNSAFE_componentWillMount(){
        this.setState({ scroll: true });

        if (typeof window !== "undefined") {
            // console.log(window.innerWidth);
            window.addEventListener('wheel', (e) => {
                this.slide(e.wheelDelta);
            })

            const lsId = localStorage.getItem('num');
            this.setState({ num: lsId });
            localStorage.setItem('projectScroll', 'leave');

            setTimeout(()=>{
                this.slider.slickGoTo(1);
            }, 100);
            setTimeout(()=>{
                this.slider.slickGoTo(2);
            }, 300);
            setTimeout(()=>{
                this.slider.slickGoTo(0);
            }, 800);
            setTimeout(()=>{
                this.setState({ loading: false }); 
            }, 2000);
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
            // responsive: [
            //     {
            //         breakpoint: 920,
            //         settings: "unslick"
            //     }
            // ],
            customPaging: function(i) {
                return (
                    <p>{text[i]}</p>
                );
            },
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };

        const onTimeClick = () => {
            this.setState({ time: !this.state.time })
        }

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

        const onToggleReset = () => {
            this.setState({ one: false });
            this.setState({ two: false });
            this.setState({ zero: false });
        }

        const onRoll = (e) => {
            const target = e.target.parentElement;
            if(target.classList.contains('1')){
                onToggleReset();
                this.setState({ one: !this.state.one });
            } else if(target.classList.contains('2')){
                onToggleReset();
                this.setState({ two: !this.state.two });
            } else {
                onToggleReset();
                this.setState({ zero: !this.state.zero });
            }
        }

        if(!id){
            return <h1>no post</h1>
        }

        return (
            <>
                {this.state.loading && <Loading />}
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
                                    <S.contentBox>
                                        <S.videoBox>
                                            <ReactPlayer
                                                className="datailPlayer"
                                                url={id ? p.project[id].video : p.project[this.state.num].video}
                                                playing={true} 
                                                loop={false} 
                                                muted={true}
                                                controls={true}
                                                width="100%"
                                                height="100%"
                                                position="absolute"
                                            />
                                        </S.videoBox>
                                        <S.timeText onClick={onTimeClick} id={id || this.state.num}>TimeStamp &nbsp; &nbsp;▼</S.timeText>
                                        <S.timeStamp id={id || this.state.num} time={this.state.time}>
                                            <p>{id ? p.project[id].timeText : p.project[this.state.num].timeText}</p>
                                            <span>{id ? p.project[id].time : p.project[this.state.num].time}</span>
                                            <span>{id ? p.project[id].timeStamp : p.project[this.state.num].timeStamp}</span>
                                        </S.timeStamp>
                                    </S.contentBox>
                                </S.contentInner>
                            </S.content>
                            <S.content className="detailSecond">
                                <S.contentInner className="detailSecond" id={id || this.state.num}>
                                    <S.Title className="info" id={id || this.state.num}>📃Info</S.Title>
                                    <S.detailUl id={id || this.state.num}>
                                        <li><div>프로젝트명</div><div>{id ? p.project[id].name : p.project[this.state.num].name}</div></li>
                                        <li><div>소개글</div><div>{id ? p.project[id].info.replace(/(?:\r\n|\r|\n)/g, '\n') : p.project[this.state.num].info.replace(/(?:\r\n|\r|\n)/g, '\n')}</div></li>
                                        <li><div>개발인원</div><div>{id ? p.project[id].num : p.project[this.state.num].num}</div></li>
                                        {id ? <li><div>기술스택</div><div>{p.project[id].skill.map((item, index)=>(<p key={index}>{item}</p>))}</div></li>
                                        : <li><div>기술스택</div><div>{p.project[this.state.num].skill.map((item, index)=>(<p key={index}>{item}</p>))}</div></li>}
                                        {id ? <li><div>담당업무</div><S.toggle one={this.state.one} two={this.state.two} zero={this.state.zero} id={id ? p.project[id].id : p.project[this.state.num].id}>{p.project[id].roll.map((item, index)=>(
                                        <p key={index} className={index}>
                                            {item.map((i, index)=>(<span key={index} className={index} onClick={e=>onRoll(e)}>{i.replace(/(?:\r\n|\r|\n)/g, '\n')}</span>))}</p>))}</S.toggle></li> :
                                        <li><div>담당업무</div><S.toggle one={this.state.one} two={this.state.two} zero={this.state.zero}>{p.project[this.state.num].roll.map((item, index)=>(
                                        <p key={index} className={index}>
                                            {item.map((i, index)=>(<span key={index} className={index} onClick={e=>onRoll(e)}>{i.replace(/(?:\r\n|\r|\n)/g, '\n')}</span>))}</p>))}</S.toggle></li>}
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
                                    <S.view>
                                        <iframe
                                            src={id ? p.project[id].deploy : p.project[this.state.num].deploy}
                                            width="100%"
                                            height="100%"
                                            margin="0"
                                            position="absolute"
                                            onLoad={onLoading}
                                        />
                                    </S.view>
                                </S.contentInner>
                            </S.content>
                        </Slide.Slider>
                    </S.container>
                </S.box>


                <S.resBox>
                    <S.container>
                        <button type="button" onClick={goBack}>뒤로가기</button>
                        <S.alert page={this.state.slideIndex}>
                            <p>Scroll</p>
                            <p><FontAwesomeIcon icon={faChevronDown} /></p>
                        </S.alert>
                        <S.content className="detailFirst">
                            <S.contentInner className="detailFirst">
                                <S.Title className="video">🎞️ Video</S.Title>
                                <S.contentBox>
                                    <S.videoBox>
                                        <ReactPlayer
                                            className="datailPlayer"
                                            url={id ? p.project[id].video : p.project[this.state.num].video}
                                            playing={true} 
                                            loop={false} 
                                            muted={true}
                                            controls={true}
                                            width="100%"
                                            height="100%"
                                            position="absolute"
                                        />
                                    </S.videoBox>
                                    <S.timeText onClick={onTimeClick} id={id || this.state.num}>TimeStamp &nbsp; &nbsp;▼</S.timeText>
                                    <S.timeStamp id={id || this.state.num} time={this.state.time}>
                                        <p>{id ? p.project[id].timeText : p.project[this.state.num].timeText}</p>
                                        <span>{id ? p.project[id].time : p.project[this.state.num].time}</span>
                                        <span>{id ? p.project[id].timeStamp : p.project[this.state.num].timeStamp}</span>
                                    </S.timeStamp>
                                </S.contentBox>
                            </S.contentInner>
                        </S.content>
                        <S.content className="detailSecond">
                            <S.contentInner className="detailSecond" id={id || this.state.num}>
                                <S.Title className="info" id={id || this.state.num}>📃Info</S.Title>
                                <S.detailUl id={id || this.state.num}>
                                    <li><div>프로젝트명</div><div>{id ? p.project[id].name : p.project[this.state.num].name}</div></li>
                                    <li><div>소개글</div><div>{id ? p.project[id].info.replace(/(?:\r\n|\r|\n)/g, '\n') : p.project[this.state.num].info.replace(/(?:\r\n|\r|\n)/g, '\n')}</div></li>
                                    <li><div>개발인원</div><div>{id ? p.project[id].num : p.project[this.state.num].num}</div></li>
                                    {id ? <li><div>기술스택</div><div>{p.project[id].skill.map((item, index)=>(<p key={index}>{item}</p>))}</div></li>
                                    : <li><div>기술스택</div><div>{p.project[this.state.num].skill.map((item, index)=>(<p key={index}>{item}</p>))}</div></li>}
                                    {id ? <li><div>담당업무</div><S.toggle one={this.state.one} two={this.state.two} zero={this.state.zero} id={id ? p.project[id].id : p.project[this.state.num].id}>{p.project[id].roll.map((item, index)=>(
                                    <p key={index} className={index}>
                                        {item.map((i, index)=>(<span key={index} className={index} onClick={e=>onRoll(e)}>{i.replace(/(?:\r\n|\r|\n)/g, '\n')}</span>))}</p>))}</S.toggle></li> :
                                    <li><div>담당업무</div><S.toggle one={this.state.one} two={this.state.two} zero={this.state.zero}>{p.project[this.state.num].roll.map((item, index)=>(
                                    <p key={index} className={index}>
                                        {item.map((i, index)=>(<span key={index} className={index} onClick={e=>onRoll(e)}>{i.replace(/(?:\r\n|\r|\n)/g, '\n')}</span>))}</p>))}</S.toggle></li>}
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
                                <S.view>
                                    <iframe
                                        src={id ? p.project[id].deploy : p.project[this.state.num].deploy}
                                        width="100%"
                                        height="100%"
                                        margin="0"
                                        position="absolute"
                                        onLoad={onLoading}
                                    />
                                </S.view>
                            </S.contentInner>
                        </S.content>
                    </S.container>
                </S.resBox>
            </>
        )
    }
};

