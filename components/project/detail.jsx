import React from 'react';
import * as S from '../../styles/detail.Style';
import ReactPlayer from 'react-player';
import Router from 'next/router';

const Detail = ({item, setQs}) => {

    const onBack = () => {
        setQs(false);
    }

    return (
        <S.box>
            <S.container>
                <S.content>
                    <ReactPlayer
                        url={item.video}
                        playing={true} 
                        loop={false} 
                        muted={true}
                        controls={true}
                        width="1152px"
                        height="648px"
                    />
                    <S.timeStamp>
                        <span>{item.time}</span>
                        <span>{item.timeStamp}</span>
                    </S.timeStamp>
                </S.content>
                <S.content>
                    <div>{item.name}</div>
                    <div>{item.skill}</div>
                    <div>{item.roll}</div>
                    <div>
                        <a href={item.git} target="_blank">깃허브</a>
                    </div>
                    <div>
                        <a href={item.deploy} target="_blank">웹사이트</a>
                    </div>
                </S.content>
                <S.content>
                    <iframe src={item.deploy} width="1152px" height="648px"/>
                    <button type="button" onClick={onBack}>뒤로가기</button>
                </S.content>
            </S.container>
        </S.box>
    )
}

export default Detail;