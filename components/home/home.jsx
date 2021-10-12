import React, { Component } from "react";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
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
        this.scroll = React.createRef();
        this.top = React.createRef();
        this.bottom = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.scrollUp = this.scrollUp.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
        this.state = {
            scroll: false,
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
        this.scroll.current.scrollIntoView({behavior:'auto', block:"center"});
        sessionStorage.clear();
    }

    scrollUp = () => {
        this.top.current.scrollIntoView({behavior:'smooth', block:"center"});
    }

    scrollDown = () => {
        this.bottom.current.scrollIntoView({behavior:'smooth', block:"center"});
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
        };


        return (
            <div>
                <FontAwesomeIcon icon={faArrowCircleUp} onClick={this.scrollUp} />
                <FontAwesomeIcon icon={faArrowCircleDown} onClick={this.scrollDown} />
                <Slider {...settings} ref={slider => this.slider = slider}>
                    <div ref={this.top}>
                        <AboutMe />
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div ref={this.scroll}>
                        <Projects />
                    </div>
                    <div ref={this.bottom}>
                        <Contacts />
                    </div>
                </Slider>
            </div>
        );``
    }
}