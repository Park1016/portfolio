import React, { useState } from 'react';
import aboutMe from '../../src/aboutMe.json';
import Image from 'next/image';
import * as S from '../../styles/aboutMe.style';
import QandA from './QandA';
import { v4 as uuid } from "uuid";
import { project } from '../../store/reducer/reducerSlice';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
    faLightbulb
);



const AboutMe = (props) => {

    const [a1, setA1] = useState(false);
    const [a2, setA2] = useState(false);
    const [a3, setA3] = useState(false);
    const [a4, setA4] = useState(false);

    const onP1 = () => {
        setA2(false);
        setA3(false);
        setA4(false);
        setA1(!a1);
    }

    const onP2 = () => {
        setA1(false);
        setA3(false);
        setA4(false);
        setA2(!a2);
    }

    const onP3 = () => {
        setA1(false);
        setA2(false);
        setA4(false);
        setA3(!a3);
    }

    const onP4 = () => {
        setA1(false);
        setA2(false);
        setA3(false);
        setA4(!a4);
    }

    return (
        <S.section>
            <S.intro>
                {/* <p>안녕하세요.</p> */}
                {/* <div> */}
                    <div>
                        <S.quot>&ldquo;</S.quot>
                        <p>프론트엔드 개발자</p>
                    </div>
                    <div>
                        <S.name>박현정</S.name>
                        <p>입니다.</p>
                        <S.quot>&rdquo;</S.quot>
                    </div>
                {/* </div> */}
                {/* <S.light><FontAwesomeIcon icon={faLightbulb} /></S.light>
                <S.back></S.back> */}
            </S.intro>
            <S.content>
                <S.img>
                    <Image
                        // src="/p6.png"
                        src="/p3.jpg"
                        alt="사진"
                        width={150}
                        height={150}
                    />
                </S.img>
                <S.text>
                    <p>{aboutMe.aboutMe[0].text.replace(/(?:\r\n|\r|\n)/g, '\n')}</p>
                    {/* <ul>
                        <li>
                            <p onClick={onP1}>{aboutMe.QandA[0].q}</p>
                            {a1 && <div>{aboutMe.QandA[0].a}</div>}
                        </li>
                        <li>
                            <p onClick={onP2}>{aboutMe.QandA[1].q}</p>
                            {a2 && <div>{aboutMe.QandA[1].a}</div>}
                        </li>
                        <li>
                            <p onClick={onP3}>{aboutMe.QandA[2].q}</p>
                            {a3 && <div>{aboutMe.QandA[2].a}</div>}
                        </li>
                        <li>
                            <p onClick={onP4}>{aboutMe.QandA[3].q}</p>
                            {a4 && <div>{aboutMe.QandA[3].a}</div>}
                        </li>
                    </ul> */}
                </S.text>
            </S.content>
        </S.section>
    )
}

export default AboutMe;