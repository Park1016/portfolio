import React, { useState, useRef } from 'react';

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
            {toggle && <div ref={answer}>{item.a}</div>}
        </li>
    )
}

export default QandA;