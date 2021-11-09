import React, { Component } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import * as reducerActions from '../../store/reducer/reducerSlice';
import dynamic from 'next/dynamic';
import { faArrowAltCircleUp, faArrowCircleUp, faArrowCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as S from '../../styles/home.style';
import P from '../../styles/Home.module.css';
import Loading from '../Loading';
import { connect } from 'react-redux';
// import P from '../../styles/Home.module.css';

const AboutMe = dynamic(() => import('../aboutMe/aboutMe'));
const Skills = dynamic(() => import('../skill/skills'));
const Projects = dynamic(() => import('../project/projects')); 
const Contacts = dynamic(() => import('../contact/contacts'));

library.add(
    faArrowAltCircleUp,
    faArrowCircleUp,
    faArrowCircleDown,
    faChevronDown
);


class Home extends Component {
    constructor(props){
        super(props);
        this.slide = this.slide.bind(this);
        this.box = React.createRef();
        this.project = React.createRef();
        this.top = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.scrollUp = this.scrollUp.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
        this.upEnter = this.upEnter.bind(this);
        this.upLeave = this.upLeave.bind(this);
        this.downEnter = this.downEnter.bind(this);
        this.downLeave = this.downLeave.bind(this);
        this.onTop = this.onTop.bind(this);

        this.state = {
            scroll: false,
            slideIndex: 0,
            upText: false,
            downText: false,
            loading: true,
            scrollY: false
        }
    }
    slide(y){
        if(this.slider !== null){
            y > 0 ? (
                this.slider.slickPrev()
            ) : (
                this.slider.slickNext()
            )
        }
    }

    componentDidMount(){

        let {
            storeNav,
            storePage,
            storeNum,
            storeContact,
            storeDetail
        } = this.props;

        // const check = sessionStorage.getItem('scroll');
        let check = this.props.storeDetail;
        if(this.slider !== null) {
            setTimeout(()=>{
                this.slider.slickGoTo(1);
            }, 100);
            setTimeout(()=>{
                this.slider.slickGoTo(2);
            }, 300);
            setTimeout(()=>{
                this.slider.slickGoTo(3);
            }, 500);
            setTimeout(()=>{
                this.slider.slickGoTo(0);
            }, 1000);
        }
        if(check === 'true'){
            this.setState({ scroll: true });
            setTimeout(()=>{
                this.setState({ loading: false }); 
            }, 2500);
        } else {
            setTimeout(()=>{
                this.setState({ loading: false }); 
                this.props.sLeave();
            }, 1500);
        }
        if (typeof window !== "undefined") {
            window.addEventListener('wheel', (e) => {
                if(this.top.current !== null){
                    if(this.top.current.scrollTop >= 300){
                        this.setState({ scrollY: true });
                        return;
                    }
                    if(this.top.current.scrollTop < 300){
                        this.setState({ scrollY: false });
                    }
                }
                if(this.props.storeContact === 'textarea') {
                    return;
                }
                this.slide(e.wheelDelta);
            })
        }
    }

    componentDidUpdate(){
        if(this.state.scroll){
            if(this.project){
                this.project.current.scrollIntoView({behavior: "smooth"});
            }
            setTimeout(()=>{
                this.onScroll();
                this.setState({ scroll: false });
                // sessionStorage.clear();
                this.props.storeDfalse();
            }, 1000);
        }
    }

    onScroll = () => {
        if(this.slider !== null){
            this.slider.slickGoTo(1);
        }
        // sessionStorage.clear();
        this.props.storeDfalse();
    }

    scrollUp = () => {
        this.slider.slickGoTo(0);
    }

    scrollDown = () => {
        this.slider.slickGoTo(3);
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

    onTop = () => {
        this.top.current.scrollIntoView({behavior: "smooth"});
    }

    render() {

        const text = ['aboutMe', 'project', 'skill', 'contact'];

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

        let {
            storeSkill,
            storeProject,
            storeAboutMe,
            storeContact,
            storeTrue,
            storeFalse,
            storeOne,
            storeTwo,
            storeThree,
            storeZero
        } = this.props;


        return (
            <>
                <S.home ref={this.box}>
                    {this.state.loading && <Loading />}
                    <S.up onClick={this.scrollUp} up={this.state.slideIndex} onMouseEnter={this.upEnter} onMouseLeave={this.upLeave}>
                        {this.state.upText && <p>맨위로</p>}
                        {/* <p>맨위로</p> */}
                    </S.up>
                    <FontAwesomeIcon icon={faArrowCircleUp} />
                    <S.down onClick={this.scrollDown} down={this.state.slideIndex} onMouseEnter={this.downEnter} onMouseLeave={this.downLeave}>
                        {this.state.downText && <p>맨아래로</p>}
                        {/* <p>맨아래로</p> */}
                    </S.down>
                    <S.alert page={this.state.slideIndex}>
                        <p>Scroll</p>
                        <p><FontAwesomeIcon icon={faChevronDown} /></p>
                    </S.alert>
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <Slider {...settings} ref={slider => this.slider = slider}>
                        <div>
                            <AboutMe />
                        </div>
                        <div>
                            <Projects />
                        </div>
                        <div>
                            <Skills />
                        </div>
                        <div>
                            <Contacts />
                        </div>
                    </Slider>
                </S.home>
                <div className={P.resHome} ref={this.top}>
                    <div>
                        <AboutMe />
                    </div>
                    <div ref={this.project}>
                        <Projects />
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Contacts />
                    </div>
                    <S.Top onClick={this.onTop} scrollY={this.state.scrollY}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                    </S.Top>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    storeNav: state.reducerSlice.nav,
    storePage: state.reducerSlice.page,
    storeNum: state.reducerSlice.num,
    storeContact: state.reducerSlice.contact,
    storeDetail: state.reducerSlice.detail
});

const mapDispatchToProps = (dispatch) => ({
    storeHome: () => dispatch(reducerActions.pHome()),
    storeSkill: () => dispatch(reducerActions.pSkill()),
    storeProject: () => dispatch(reducerActions.pProject()),
    storeAboutMe: () => dispatch(reducerActions.pAboutMe()),
    storeContact: () => dispatch(reducerActions.pContact()),

    storeTrue: () => dispatch(reducerActions.sTrue()),
    storeFalse: () => dispatch(reducerActions.sFalse()),

    storeOne: () => dispatch(reducerActions.nOne()),
    storeTwo: () => dispatch(reducerActions.nTwo()),
    storeThree: () => dispatch(reducerActions.nThree()),
    storeZero: () => dispatch(reducerActions.nZero()),

    sTextarea: () => dispatch(reducerActions.tTextarea()),
    sLeave: () => dispatch(reducerActions.tLeave()),

    storeDtrue: () => dispatch(reducerActions.dTrue()),
    storeDfalse: () => dispatch(reducerActions.dFalse())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);