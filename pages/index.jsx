import React from 'react';

const Home = (props) => {
    return (
        <h1>Home</h1>
    )
}

export default Home;

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