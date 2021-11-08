import React from 'react';
import { useRouter } from "next/router"
import Detail from '../../../components/project/detail';

const Index = (props) => {
    const router = useRouter();
    const id = router.query.num;

    return (
        <Detail id={id} />
    )
}

export default Index;