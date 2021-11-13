import styled, { css, keyframes } from 'styled-components';


const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #FFC75F; */
    background: #2F4858;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const quot = styled.span`
    font-size: 3rem;
    color: #E2B646;
    text-align: center;
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
`;

const introKey = keyframes`
    0% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const contentKey = keyframes`
    0% {
        transform: translateY(30rem);
    }
    80% {
        transform: translateY(30rem);
    }
    100% {
        transform: translateY(0rem);
    }
`;


const intro = styled.div`
    position: relative;
    width: 70rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    z-index: 10;
    animation: ${introKey} 500ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    p {
        color: #fff;
        font-size: 3rem;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 850px) {
        flex-direction: column;
    }
    @media screen and (max-width: 430px) {
        p {
            font-size: 2rem;
        }
    }
    @media screen and (max-height: 700px) {
        margin-bottom: 0.5rem;
    }
    @media screen and (max-height: 600px) {
        margin-bottom: 0;
        p {
            font-size: 1.5rem;
        }
        div {
            height: 2.5rem;
        }
    }
`;

const content = styled.div`
    margin-top: 1.5rem;
    width: 70vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: ${contentKey} 1500ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    p, ul {
        color: #fff;
        font-size: 1.1rem;
    }
    ul {
        margin-top: 1rem;
        li {
            margin: 0.5rem 0;
            p {
                color: rgb(226,182,70);
                /* font-weight: bold; */
            }
            p:hover {
                cursor: pointer;
            }
            div {
                margin: 0.5rem 0;
                background: rgb(255,255,255,0.1);
                border-radius: 10px;
                padding: 0.5rem 0.7rem;
            }
        }
    }
    @media screen and (max-height: 700px) {
        margin-top: 1rem;
    }
    @media screen and (max-height: 600px) {
        margin-top: 0.5rem;
    }
`;

const name = styled.span`
    margin-left: 1rem;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;
    color: #E2B646;
    @media screen and (max-width: 430px) {
        font-size: 2.5rem;
    }
    @media screen and (max-height: 600px) {
        font-size: 2rem;
    }
`;

const text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: pre-wrap;
    p {
        text-align: center;
        background: rgb(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 1.5rem 0.5rem;
        width: 50rem;
    }
    @media screen and (max-width: 850px) {
        display: none;
    }
`;

const resText = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        background: rgb(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 1.5rem 0.5rem;
        width: 90vw;
    }
    @media screen and (max-width: 850px) {
        display: flex;
    }
    @media screen and (max-width: 430px) {
        p {
            font-size: 0.9rem;
        }
    }
`;

const img = styled.div`
    display: none;
    /* width: 20rem;
    height: 20rem; */
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 2rem;
    /* box-shadow: 3px 3px 10px black; */
`;

const light = styled.div`
    position: absolute;
    top: -9rem;
    left: 33.2rem;
`;

const back = styled.div`
    position: absolute;
    top: -3rem;
    left: 32.5rem;
    width: 5rem;
    height: 5rem;
    z-index: -1;
    transform: rotate(45deg);
    background: rgb(226,182,70);
    background: linear-gradient(135deg, rgba(226,182,70,1) 0%, rgba(47,72,88,1) 45%, rgba(47,72,88,1) 100%);
`;


export {
    section,
    intro,
    content,
    name,
    text,
    resText,
    img,
    quot,
    light,
    back,
}