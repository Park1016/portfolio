import styled, {css} from 'styled-components';

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

const modal = styled.div`
    position: absolute;
    /* width: 45rem; */
    height: 20rem;
    z-index: 10;
    display: flex;
    flex-direction: row;
    transition: all 100ms ease-in-out;
    ul:nth-child(1) {
        li:nth-child(2){
            position: absolute;
            top: 0;
            left: 0;
            width: 24.75rem;
            height: 13rem;
            background: transparent;
        }
    }
    ul:nth-child(2){
        li:nth-child(3){
            display: flex;
            flex-direction: row;
            p {
                border: 1px solid black;
                border-radius: 10px;
                margin-right: 0.2rem;
            }
        }
    }
    ${(props) => {
        if(props.show){
            return css`
                width: 45rem;
            `;
        } else {
            return css`
                width: 0;
                visibility: hidden;
            `;
        }
    }}
    ${(props) => {
        if (props.className === 'first') {
            return css`
                background: #E1D6CD;
                top: 0;
                left: 0;
            `;
        }
        if (props.className === 'second'){
            return css`
                background: #F1D9AC;
                top: 0;
                right: 0;
            `;
        }
        if (props.className === 'third'){
            return css`
                background: #EABAAE;
                bottom: 0;
                left: 0;
            `;
        }
        if (props.className === 'fourth'){
            return css`
                background: #EFDFE5;
                bottom: 0;
                right: 0;
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