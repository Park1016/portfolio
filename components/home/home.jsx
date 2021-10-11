import React from 'react';
import AboutMe from '../aboutMe/aboutMe';
import dynamic from 'next/dynamic';
import * as Slide from '../../styles/slide.style';
import Slider from "react-slick";

const Skills = dynamic(() => import('../skill/skills'));
const Projects = dynamic(() => import('../project/projects')); 
const Contacts = dynamic(() => import('../contact/contacts'));

const Home = (props) => {

    // const settings = {
    //     // 아래 dots 줄 것인가
    //     dots: false,
    //     // 좌우 화살표 줄 것인가
    //     arrows: false,
    //     // 마지막 슬라이드에서 처음 슬라이스로
    //     infinite: false,
    //     speed: 2000,
    //     // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    //     slidesToShow: 1,
    //     // 스크롤 할 때마다 몇 장씩 넘길 것인가
    //     slidesToScroll: 1,
    //     // 자동 넘김을 할 것인가. 한다면 스피드는?
    //     autoplay: false,
    //     // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
    //     pauseOnHover: true,
    //     // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
    //     fade: false,
    //     // 레이지 로딩할 거야?
    //     lazyLoad: true,
    //     vertical : true,
    // };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        // <S.Slider {...settings}>
        //     <AboutMe />
        //     <Skills />
        //     <Projects />
        //     <Contacts />
        // </S.Slider>
        // <>
        //     <AboutMe />
        //     <Skills />
        //     <Projects />
        //     <Contacts />
        // </>
        <Slide.Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slide.Slider>
    )
}

export default Home;