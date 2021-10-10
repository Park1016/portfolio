import React from 'react';
import Home from '../components/home/home';
import * as S from '../styles/home.style';
import Slider from "react-slick";

const Index = (props) => {

    const settings = {
        // 아래 dots 줄 것인가
        dots: false,
        // 좌우 화살표 줄 것인가
        arrows: false,
        // 마지막 슬라이드에서 처음 슬라이스로
        infinite: false,
        speed: 2000,
        // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
        slidesToShow: 1,
        // 스크롤 할 때마다 몇 장씩 넘길 것인가
        slidesToScroll: 1,
        // 자동 넘김을 할 것인가. 한다면 스피드는?
        autoplay: false,
        // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
        pauseOnHover: true,
        // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
        fade: false,
        // 레이지 로딩할 거야?
        lazyLoad: true,
        vertical : true,
    };


    return (
        // <S.Slider {...settings}>
            <Home />
        // </S.Slider>
    )
}

export default Index;

// 서버사이드
// 서버에서 데이터가 바꼈을 때 바로바로 즉각적으로 빈번하게 변화
// export const getServerSideProps = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

// 스태틱사이드
// 미리 html파일을 생성해서 접근을 바로바로 할 수 있고,
// 접근할때마다 데이터 조회가 일어나는것이 아니라,
// 이미 만들어진 html을 보여주는 방식
// 새로운 데이터를 보여주기 위해선 revalidate 사용
// 페이지가 즉각적으로 변화하지 않아도 된다면 스태틱사이드 사용(더 빠른 렌더링, 처리속도)
// export const getStaticProps = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     },
//     //20초 후에 새로운 데이터를 받아서 html파일을 새롭게 생성하도록
//     revalidate: 20
//   }
// }