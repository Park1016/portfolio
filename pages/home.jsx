import React, { Component, useRef } from "react";
import Slider from "react-slick";
import AboutMe from '../components/aboutMe/aboutMe';
import Skills from '../components/skill/skills';
import Projects from '../components/project/projects';
import Contacts from '../components/contact/contacts';
import { faDove } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
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
                <Slider {...settings} ref={slider => this.slider = slider}>
                    <div title="AboutMe">
                        <AboutMe />
                    </div>
                    <div title="Skill">
                        <Skills />
                    </div>
                    <div title="Project">
                        <Projects />
                    </div>
                    <div title="Contact">
                        <Contacts />
                    </div>
                </Slider>
            </div>
        );``
    }
}