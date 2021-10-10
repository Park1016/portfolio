import React, { Component, useRef } from "react";
import Slider from "react-slick";
import AboutMe from '../components/aboutMe/aboutMe';
import Skills from '../components/skill/skills';
import Projects from '../components/project/projects';
import Contacts from '../components/contact/contacts';

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
            <div>
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