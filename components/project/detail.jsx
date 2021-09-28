import React from 'react';
import * as S from '../../styles/detail.Style';
import Router from 'next/router';

const Detail = ({item}) => {

    const onBack = () => {
        Router.push(`/project`);
    }

    return (
        <S.section>
            <S.container>
                <S.gif></S.gif>
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