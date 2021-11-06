import React from 'react';
import * as S from '../styles/loading.style';
import Image from 'next/image';

const Loading = (props) => {
    return (
        <S.section>
            <Image 
                src="/loading2.svg"
                alt="loading"
                width={300}
                height={300}
            />
        </S.section>
    )
}

export default Loading;