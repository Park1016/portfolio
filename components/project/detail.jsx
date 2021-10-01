import React from 'react';
import * as S from '../../styles/detail.Style';
import ReactPlayer from 'react-player';
import Router from 'next/router';

const Detail = ({item, setQs}) => {

    const onBack = () => {
        setQs(false);
    }

    return (
        <S.section>
            <S.container>
                <ReactPlayer
                    // url={require('../../public/test2.mp4')}
                    url={item.video}
                    playing={true} 
                    loop={true} 
                    muted={true}
                    controls={true}
                    width="500px"
                    height="400px"
                />
                <li>{item.name}</li>
                <li>{item.skill}</li>
                <li>{item.roll}</li>
                <li>
                    <a href={item.git} target="_blank">깃허브</a>
                </li>
                <li>
                    <a href={item.deploy} target="_blank">배포주소</a>
                </li>
                <li><button type="button" onClick={onBack}>뒤로가기</button></li>
            </S.container>
        </S.section>
    )
}

export default Detail;