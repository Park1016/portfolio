import styled, { css, keyframes } from 'styled-components';

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
    background: lightblue;
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
        position: sticky;
        top: 0;
        left: 0;
        width: 5rem;
        transform: translateX(calc(100vw - 5rem));
        z-index: 10;
    }
`;

const topContent = styled.li`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 4rem);
`;

const content = styled.li`
    display: flex;
    height: calc(100vh - 4rem);
`

const timeStamp = styled.span`
    display: flex;
    flex-direction: row;
    span {
        white-space: pre-wrap;
    }
    span:nth-child(1){
        color: blue;
        margin-right: 0.5rem;
    }
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
    bottom: 1rem;
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
    topContent,
    content,
    timeStamp,
    alert
};