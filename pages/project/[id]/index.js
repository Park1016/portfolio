import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router"
import Detail from '../../../components/project/detail';

const Index = (props) => {
    const router = useRouter();
    const id = router.query.num;

    return (
        <Detail id={id} />
        // <h1>asdf</h1>
    )
}

export default Index;