import styled, { css, keyframes } from 'styled-components';
import { None } from './project.Style';

const box = styled.div`
    width: 100vw;
    height: calc(100vh - 4rem);
    transform: translateY(4rem);
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const container = styled.ul`
    width: 100vw;
    height: calc(100vh - 4rem);
    overflow: hidden;
    /* overflow-y: auto; */
    background: #fff;
    /* scroll-behavior: smooth;
    scroll-snap-type: y mandatory; */
    li:nth-child(1){
        span {
            display: flex;
            flex-direction: row;
        }
    }
    button {
        position: absolute;
        top: 2rem;
        right: 1rem;
        width: 5rem;
        height: 2rem;
        z-index: 10;
        background: #766f88;
/* background: linear-gradient(90deg, rgba(225,177,177,1) 0%, rgba(118,111,136,1) 100%); */
        /* border: 1px solid #fff; */
        border: none;
        border-radius: 20px;
        color: #fff;
        /* text-shadow: 1px 1px 5px #fff; */
        box-shadow: 2px 2px 3px #363636;
    }
    button:hover {
        cursor: pointer;
    }
`;

const content = styled.li`
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; */
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #E1B1B1;
    ${(props) => {
        if (props.className === 'detailFirst') {
            return css`
                background: #2F4858;
            `;
        }
        if (props.className === 'detailSecond'){
            return css`
                background: #2D3748;
            `;
        }
        if (props.className === 'detailThird'){
            return css`
                background: #2F4858;
            `;
        }
    }}
`;

const Title = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    font-weight: bold;
    height: 2.6rem;
    border-bottom: 7px solid #FFC831;
    text-align: center;
    
    ${(props) => {
        if (props.className === 'video') {
            return css`
                transform: translate(calc(40rem - 6rem), -1rem);
                width: 9rem;
                color: #fff;
                text-shadow: 3px 3px 5px black;
            `;
        }
        if (props.className === 'info'){
            return css`
                width: 7rem;
                transform: translateX(-10rem);
                /* color: #FEC731; */
                color: #fff;
                /* border-bottom: 7px solid #FBE19A; */
                text-shadow: 3px 3px 5px black;
            `;
        }
        if (props.className === 'view'){
            return css`
                width: 8rem;
                color: #fff;
                text-shadow: 3px 3px 5px black;
                transform: translateX(-9rem);
            `;
        }
    }}
`;

const contentInner = styled.div`
    height: calc(100vh - 8rem);
    background: transparent;
    position: relative;
    ${(props) => {
        if (props.className === 'detailFirst') {
            return css`
                width: 80rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translate(calc((100vw - 80rem)/2), 2rem);
            `;
        }
        if (props.className === 'detailSecond'){
            return css`
                width: 70rem;
                transform: translate(calc((100vw - 60rem)/2), 2rem);
            `;
        }
        if (props.className === 'detailThird'){
            return css`
                width: 1094px;
                transform: translate(calc((100vw - 1094px)/2), 2rem);
                background: transparent;
            `;
        }
    }}
`;

const timeStamp = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    background: rgb(255,255,255,0.1);
    border-radius: 10px;
    position: relative;
    box-shadow: 3px 3px 5px #363636;
    p {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 2rem;
        left: 0;
        color: #FFC831;
        font-weight: bold;
        font-size: 1.5rem;
        text-shadow: 3px 3px 3px black;
    }
    span {
        white-space: pre-wrap;
        color: #fff;
        line-height: 1.5;
    }
    span:nth-child(2){
        margin-right: 0.5rem;
        /* color: rgb(255,255,255,0.5); */
        color: rgb(255, 200, 49, 0.9);
    }
    ${(props)=>{
        console.log(typeof(props.id));
        if(props.id === '1' || props.id === '2'){
            return css`
                width: 0;
                padding: 0;
            `;
        }
        if(props.id === '0'){
            return css`
                width: 19rem;
                padding: 0 1rem;
                span {
                    transform: translateY(1.5rem);
                }
            `;
        }
        if(props.id === '3'){
            return css`
                width: 19rem;
                padding: 0 1rem;
            `;
        }
    }}
`;

const detailUl = styled.ul`
    li {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        color: #fff;
        div:nth-child(1) {
            width: 5rem;
            margin-right: 1rem;
            color: #FFC831;
            font-weight: bold;
            /* text-shadow: 3px 3px 3px black; */
        }
        div:nth-child(2) {
            width: 57rem;
            display: flex;
        }
    }
    li:nth-child(3) {
        div:nth-child(1) {
            transform: translateY(0.2rem);
        }
        div:nth-child(2) {
            display: flex;
            flex-direction: row;
            p {
                border: 1px solid #fff;
                padding: 0.2rem 0.5rem;
                margin-right: 0.5rem;
                border-radius: 10px;
            }
        }
    }
    li:nth-child(4) {
        div:nth-child(2) {
            p {
                span {
                    white-space: pre-wrap;
                }
            }
        }
    }
    li:nth-child(5) {
        a {
            border: 1px solid #fff;
            margin-right: 0.5rem;
            border-radius: 10px;
            width: 6.5rem;
            height: 2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            span {
                margin-left: 0.3rem;
            }
        }
    }
    ${(props) => {
        console.log(props.id);
        if(props.id === '0'){
            return css`
                li:nth-child(4) {
                    margin-top: 1.5rem;
                    div:nth-child(2) { 
                        /* border: 1px solid rgb(255, 200, 49, 0.8); */
                        display: flex;
                        flex-wrap: wrap;
                        p {
                            display: flex;
                            flex-direction: row;
                            margin-bottom: 1rem;
                            span:nth-child(1){
                                width: 4rem;
                                margin-right: 1rem;
                                display: flex;
                                align-items: flex-start;
                                justify-content: center;
                                color: rgb(255, 200, 49, 0.8);
                            }
                        }
                        p:nth-child(1) {
                            padding-right: 2.5rem;
                        }
                        p:nth-child(2) {
                            padding-left: 2.5rem;
                            padding-bottom: 1rem;
                            margin: 0;
                            /* border-left: 1px solid rgb(255, 200, 49, 0.8); */
                        }
                        p:nth-child(3) {
                            /* width: 57rem; */
                            padding-top: 1rem;
                            /* border-top: 1px solid rgb(255, 200, 49, 0.8); */
                        }
                    }
                }
                li:nth-child(5) {
                    flex-direction: column;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: translate(-9.75rem, 4rem);
                    a {
                        margin-bottom: 1rem;
                    }
                }
            `;
        } else {
            return css`
                li:nth-child(4) {
                    div:nth-child(2) { 
                        display: flex;
                        flex-direction: column;
                        p {
                            margin-bottom: 0.5rem;
                        }
                    }
                }
                li:nth-child(5) {

                }
            `;
        }
    }}
`;

const text = keyframes`
    0% {
        color: #fff;
    }
    65% {
        color: #fff;
    }
    85% {
        color: transparent;
    }
    95% {
        color: #fff;
    }
    100% {
        color: #fff;
    }
`;

const icon = keyframes`
    0% {
        color: rgb(255,255,255,0.8);
    }
    70% {
        color: rgb(255,255,255,0.8);
    }
    90% {
        color: transparent;
    }
    100% {
        color: rgb(255,255,255,0.8);
    }
`;


const alert = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    bottom: 2rem;
    /* left: calc(50vw - 1rem); */
    right: 1rem;
    z-index: 13;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0,0,0,0.1);
    p:nth-child(1) {
        font-size: 1rem;
        animation: ${text} 5000ms;
        animation-iteration-count: infinite;
        animation-direction: normal;
        transform: translateY(0.3rem);
    }
    p:nth-child(2) {
        animation: ${icon} 5000ms;
        animation-iteration-count: infinite;
        animation-direction: normal;
    }
    ${(props) => {
        if (props.page === 2) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: flex;
            `;
        }
    }}
`;

export {
    box,
    container,
    detailUl,
    content,
    contentInner,
    timeStamp,
    alert,
    Title,
};