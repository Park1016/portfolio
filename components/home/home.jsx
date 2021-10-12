import React, { Component } from "react";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as S from '../../styles/home.style';
// import P from '../../styles/Home.module.css';

const AboutMe = dynamic(() => import('../aboutMe/aboutMe'));
const Skills = dynamic(() => import('../skill/skills'));
const Projects = dynamic(() => import('../project/projects')); 
const Contacts = dynamic(() => import('../contact/contacts'));

library.add(
    faArrowCircleUp,
    faArrowCircleDown,
);


export default class Home extends Component {
    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
        this.box = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.scrollUp = this.scrollUp.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
        this.upDown = this.upDown.bind(this);
        this.upEnter = this.upEnter.bind(this);
        this.upLeave = this.upLeave.bind(this);
        this.downEnter = this.downEnter.bind(this);
        this.downLeave = this.downLeave.bind(this);

        this.state = {
            scroll: false,
            slideIndex: 0,
            upText: false,
            downText: false
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
        }
    }

    componentDidMount(){
        const check = sessionStorage.getItem('scroll');
        if(check){
            this.setState({ scroll: true });
        }
        
    }

    componentDidUpdate(){
        if(this.state.scroll){
            this.onScroll();
            this.setState({ scroll: false });
        }
    }

    onScroll = () => {
        this.slider.slickGoTo(2);
        sessionStorage.clear();
    }

    scrollUp = () => {
        this.slider.slickGoTo(0);
    }

    scrollDown = () => {
        this.slider.slickGoTo(3);
    }

    upDown = () => {
        console.log(this.box.current.scrollTop);
    }

    upEnter = () => {
        this.setState({ upText: true }); 
    }

    upLeave = () => {
        this.setState({ upText: false }); 
    }

    downEnter = () => {
        this.setState({ downText: true }); 
    }

    downLeave = () => {
        this.setState({ downText: false }); 
    }

    render() {

        const text = ['aboutMe', 'skill', 'project', 'contact'];

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
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };


        return (
            <div ref={this.box}>
                <S.up onClick={this.scrollUp} up={this.state.slideIndex} onMouseEnter={this.upEnter} onMouseLeave={this.upLeave}>
                    {this.state.upText && <p>맨위로</p>}
                    {/* <p>맨위로</p> */}
                </S.up>
                <FontAwesomeIcon icon={faArrowCircleUp} />
                <S.down onClick={this.scrollDown} down={this.state.slideIndex} onMouseEnter={this.downEnter} onMouseLeave={this.downLeave}>
                    {this.state.downText && <p>맨아래로</p>}
                    {/* <p>맨아래로</p> */}
                </S.down>
                <FontAwesomeIcon icon={faArrowCircleDown} />
                <Slider {...settings} ref={slider => this.slider = slider}>
                    <div>
                        <AboutMe />
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Projects />
                    </div>
                    <div>
                        <Contacts />
                    </div>
                </Slider>
            </div>
        );``
    }
}