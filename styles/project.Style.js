﻿import styled, {css, keyframes} from 'styled-components';

const modalWidth = '27.5rem';
const modalHeight = '25rem';

const text = styled.p`
    color: #737373;
    font-size: 2rem;
    font-weight: bold;
    z-index: 20;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-3rem);
    /* transform: translateX(15rem);
    display: flex;
    flex-direction: column;
    text-align: center; */
    span:nth-child(1) {
        margin: 0 0.5rem 0 2rem;
    }
`;

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #E1B1B1;
    /* background: #e3e3e3; */
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* scroll-snap-align: center; */
`;

const div = styled.div`
    width: 58rem;
    /* width: 90%; */
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #CA9F9F;
    padding: 2rem 0;
    /* max-height: 90%; */
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* overflow: visible; */
    /* overflow-y: auto; */
    ::-webkit-scrollbar { 
        display: none;
    }
    /* @media screen and (max-width: 1040px) {
        width: 100%;
    } */
`;

const box = styled.div`
    width: 24.5rem;
    /* width: 38rem; */
    height: 13rem;
    position: relative;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    /* div {
        margin: 0 0.5rem 0 0.3rem;
    } */
    :hover {
        cursor: pointer;
    }
    /* ${(props) => {
        if(props.show) {
            return css`
                width: 45rem;
                height: 20rem;
            `;
        } else {
            return css`
                width: 38rem;
                height: 15rem;
            `;
        }
    }} */
    /* ${(props) => {
        if (props.className === 'first') {
            return css`
                background: #E1D6CD;
            `;
        }
        if (props.className === 'second'){
            return css`
                background: #F1D9AC;
            `;
        }
        if (props.className === 'third'){
            return css`
                background: #EABAAE;
            `;
        }
        if (props.className === 'fourth'){
            return css`
                background: #EFDFE5;
            `;
        }
    }} */
`;

const show = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const modal = styled.div`
    position: absolute;
    /* width: 45rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 30;
    transition: opacity 500ms ease-in-out;
    overflow: hidden;
    color: #fff;
    ul:nth-child(1) {
        /* animation: ${show} 2000ms;
        animation-iteration-count: 1;
        animation-direction: normal; */
        transform: translateX(-0.95rem);
        transition: opacity 500ms ease-in-out;
        li:nth-child(1) {
            position: relative;
            /* div {
                position: absolute;
                top: 0;
                left: 0;
                width: 24.75rem;
                height: 13rem;
                background: red;
            } */
        }
        li:nth-child(2){
            position: absolute;
            top: 0;
            left: 0;
            width: ${modalWidth};
            height: ${modalHeight};
            background: transparent;
        }
    }
    ul:nth-child(2){
        /* width: 24.5rem; */
        /* animation: ${show} 2000ms;
        animation-iteration-count: 1;
        animation-direction: normal; */
        /* background: white;
        transform: translateY(-1.4rem); */
        /* transition: opacity 500ms ease-in-out; */
        li {
            width: calc(27.5rem - 3.5rem);
            display: flex;
            flex-direction: row;
            margin: 0.5rem 0 0.5rem 2.8rem;
            /* background: red; */
            span:nth-child(1) {
                width: 5rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            span:nth-child(2) {
                width: calc(26.5rem - 5rem - 2rem);
            }
        }
        li:nth-child(1) {
            margin-top: 0.8rem;
        }
        li:nth-child(3) {
            span:nth-child(2) {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                p {
                    border: 1px solid #fff;
                    border-radius: 10px;
                    height: 2rem;
                    line-height: 1.7;
                    padding: 0 0.5rem;
                    margin: 0.2rem 0.4rem 0.2rem 0;
                }
            }
        }
        li:nth-child(4) {
            margin: 1rem 0 0 0;
            width: ${modalWidth};
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            a {
                border: 1px solid #fff;
                border-radius: 10px;
                width: 7rem;
                height: 2rem;
                text-align: center;
                line-height: 2;
                padding: 0 0.5rem;
                span {
                    font-size: 1rem;
                    margin-left: 0.3rem;
                }
            }
            a:nth-child(2) {
                margin: 0 0.5rem;
            }
            button {
                width: 7rem;
                height: 2rem;
                text-align: center;
                line-height: 1;
                padding: 0 0.5rem;
                border: none;
                border-radius: 10px;
                font-size: 1rem;
                color: #fff;
            }
            button:hover {
                cursor: pointer;
            }
        }
    }
    ${(props) => {
        if(props.show){
            return css`
                width: ${modalWidth};
                /* display: flex; */
                opacity: 1;
                ul {
                    width: ${modalWidth};
                    display: block;
                    opacity: 1;
                }
            `;
        } else {
            return css`
                width: 0;
                height: 0;
                opacity: 0;
                /* display: none; */
                ul {
                    width: 0;
                    height: 0;
                    opacity: 0;
                    display: none;
                }
            `;
        }
    }}
    ${(props) => {
        if (props.className === 'first') {
            return css`
                background: #E1D6CD;
                transform: translate(-2.6rem, 2rem);
                height: 28.5rem;
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translateY(-0.8rem);
                    }
                }
                ul:nth-child(2) {
                    background: #E1D6CD;
                    transform: translateY(-0.7rem);
                }
            `;
        }
        if (props.className === 'second'){
            return css`
                background: #F1D9AC;
                transform: translate(-2.6rem, 2rem);
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translateY(-1rem);
                    }
                }
                ul:nth-child(2) {
                    background: #F1D9AC;
                    transform: translateY(-2.1rem);
                }
            `;
        }
        if (props.className === 'third'){
            return css`
                background: #EABAAE;
                transform: translate(-2.6rem, -3.5rem);
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translateY(-0.8rem);
                    }
                }
                ul:nth-child(2) {
                    background: #EABAAE;
                    transform: translateY(-1.8rem);
                }
            `;
        }
        if (props.className === 'fourth'){
            return css`
                background: #EFDFE5;
                transform: translate(-2.6rem, -3.5rem);
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translateY(-0.4rem);
                    }
                }
                ul:nth-child(2) {
                    background: #EFDFE5;
                    transform: translateY(-1rem);
                }
            `;
        }
    }}
`;

const detail = styled.div`
    ${props => {
        if(props.qs){
            return css`
                width: 100%;
                height: 100%;
                background: rgb(0, 0, 0, 0.5);
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            `
        } else {
            return css`
                /* display: none; */
            `
        }
    }}
`;

const content = styled.div`
    ${props => {
        if(props.qs){
            return css`
                width: 30rem;
                height: 20rem;
                background: #fff;
            `
        } else {
            return css`
                /* display: none; */
            `
        }
    }}
`;

const None = styled.div`
    display: none;
`;

const over = styled.div`
    /* position: absolute; */
    /* transform: translate(0.3rem, -13rem); */
    position: relative;
    width: 24.75rem;
    height: 13rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 0 0.5rem 0 1rem; */
    /* ${(props) => {
        if (props.className === 'first') {
            return css`
                border: 5px solid #E1D6CD;
            `;
        }
        if (props.className === 'second'){
            return css`
                border: 5px solid #F1D9AC;
            `;
        }
        if (props.className === 'third'){
            return css`
                border: 5px solid #EABAAE;
            `;
        }
        if (props.className === 'fourth'){
            return css`
                border: 5px solid #EFDFE5;
            `;
        }
    }} */
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0,0,0,0.5);
        p {
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            transform: translate(1rem, 1rem);
        }
    }
`;

const textArea = styled.ul`
    width: 10rem;
`;

export {
    text,
    section,
    div,
    box,
    textArea,
    modal,
    over,
    detail,
    content,
    None,
};