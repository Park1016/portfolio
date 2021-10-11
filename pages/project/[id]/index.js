import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router"
import Detail from '../../../components/project/detail';
import project from '../../../src/project.json';

const Index = (props) => {
    const router = useRouter();
    const { item } = router.query;
    const items = JSON.parse(item);

    return (
        <Detail item={items} />
        // <h1>asdf</h1>
    )
}

// export const getStaticProps = async(context) => {
//     const {id} = context.params;
//     console.log(id);
//     // const pj = project.map(pro => pro.id);
//     // const res = await fetch('../../../src/project.json');
//     // const photo = await res.json();
//     const target = project.filter((pro)=>{
//         pro.id.includes(id);
//     })
//     console.log(target);
//     return {
//         props: {
//             target
//         }
//     }
// }
// export const getStaticPaths = async() => {
//     // const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
//     // const photos = await res.json();
//     const pj = project.map(pro => pro.id);
//     const paths = pj.map(id=>{
//         return {
//             params: {id: id.toString()}
//         }
//     })
//     return {
//         paths,
//         fallback: 'false',
//     }
// }

export default Index;