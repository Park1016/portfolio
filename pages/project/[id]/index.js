import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router"
import Detail from '../../../components/project/detail';

const Index = (props) => {
    const router = useRouter();
    const { item } = router.query;
    const items = JSON.parse(item);

    return (
        <Detail item={items} />
        // <h1>asdf</h1>
    )
}

export default Index;