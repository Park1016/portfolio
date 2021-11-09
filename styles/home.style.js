import styled, { css, keyframes } from 'styled-components';

const home = styled.div`
    @media screen and (max-width: 920px) {
        display: none;
    }
    @media screen and (min-width: 921px) {
        @media screen and (max-height: 650px) {
            display: none;
        }
    }
`;

const resHome = styled.div`
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        width: 0;
        background-color: lightgray;
        /* background-color: rgb(0, 0, 0, 0); */
        /* border-radius: 10px; */
    }
    ::-webkit-scrollbar-thumb {
        /* border-radius: 10px; */
        width: 5px;
        background-color: #E2B646;
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
    @media screen and (min-width: 921px) {
        /* display: none; */
        @media screen and (max-height: 650px) {
            display: block;
        }
        @media screen and (min-height: 651px) {
            display: none;
        }
    }   
`;

const up = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3rem;
    /* left: calc(50vw - 1rem); */
    right: 1rem;
    z-index: 13;
    transition: all 500ms ease-in-out;
    p {
        width: 4rem;
        padding: 0.2rem 0.5rem;
        background: rgb(0,0,0,0.5);
        color: #fff;
        border-radius: 10px;
        transform: translate(-4.5rem, 0.1rem);
    }
    ${(props) => {
        if (props.up === 0) {
            return css`
                background: rgb(47, 72, 88, 0.7);
                :hover {
                    cursor: not-allowed;
                }
            `;
        } else {
            return css`
                background: transparent;
                :hover {
                    cursor: pointer;
                }
            `;
        }
    }}
`;

const down = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    bottom: 1rem;
    /* left: calc(50vw - 1rem); */
    right: 1rem;
    z-index: 13;
    transition: all 500ms ease-in-out;
    p {
        width: 5rem;
        padding: 0.2rem 0.5rem;
        background: rgb(0,0,0,0.5);
        color: #fff;
        border-radius: 10px;
        transform: translate(-5.5rem, 0.1rem);
    }
    ${(props) => {
        if (props.down === 3) {
            return css`
                background: rgb(47, 72, 88, 0.7);
                :hover {
                    cursor: not-allowed;
                }
            `;
        } else {
            return css`
                background: transparent;
                :hover {
                    cursor: pointer;
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
    bottom: 0.3rem;
    left: calc(50vw - 2rem);
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
        if (props.page === 3) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: flex;
            `;
        }
    }}
    @media screen and (max-width: 920px) {
        display: none;
    }
`;

const Top = styled.div`
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    width: 2.7rem;
    /* height: 2.7rem; */
    background: #fff;
    color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #2f4858;
    transition: all 500ms ease-in-out;
    :hover {
        cursor: pointer;
    }
    ${(props)=>{
        if(props.scrollY){
            return css`
                transform: translateY(0);
                height: 2.7rem;
            `;
        } else {
            return css`
                transform: translateY(2rem);
                height: 0;
            `;
        }
    }}
`;


export {
    home,
    resHome,
    up,
    down,
    alert,
    Top
}