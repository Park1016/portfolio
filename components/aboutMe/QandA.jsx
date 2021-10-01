import React, { useState, useRef } from 'react';
import * as S from '../../styles/aboutMe.style';

const QandA = ({item}) => {

    let [toggle, setToggle] = useState(false);

    const li = useRef();
    const answer = useRef();

    const onToggle = () => {
        setToggle(!toggle);
    };


    return (
        <li ref={li}>
            <p onClick={onToggle}>{item.q}</p>
            {/* <S.answer ref={answer} toggle={toggle}>{item.a}</S.answer> */}
            {toggle && <div ref={answer}>{item.a}</div>}
        </li>
    )
}

export default QandA;