﻿import styled, {css} from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: lightcoral; */
    background: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* scroll-snap-align: center; */
`;

const div = styled.div`
    /* background: blue; */
    width: 90%;
    max-height: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar { 
        display: none;
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
    }
`;

const box = styled.div`
    width: 38rem;
    height: 15rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    div {
        margin: 0 0.5rem 0 0.3rem;
    }
    :hover {
        cursor: pointer;
    }
    ${(props) => {
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
    position: absolute;
    width: 24.75rem;
    height: 13rem;
    transform: translateY(-13rem);
    background: transparent;
`;

export {
    section,
    div,
    box,
    over,
    detail,
    content,
    None,
};