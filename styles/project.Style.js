import styled, {css, keyframes} from 'styled-components';

const modalWidth = '27.5rem';
const modalHeight = '25rem';

const text = styled.p`
    /* color: #FFCA28; */
    width: 15rem;
    height: 0;
    text-align: center;
    color: #FFF8E8;
    font-size: 2rem;
    font-weight: bold;
    z-index: 20;
    position: sticky;
    left: 0;
    top: 0;
    transform: translate(-23rem, -3.5rem);
    text-shadow: 1.5px 1.5px 2px black;
    span:nth-child(1) {
        margin: 0 0.5rem 0 2rem;
    }
    @media screen and (max-width: 1050px) {
        transform: translate(-19rem, -3.5rem);
    }
    @media screen and (max-width: 920px) {
        position: sticky;
        left: 0;
        top: 0;
        padding-top: 1rem;
        width: 14rem;
        height: 3.7rem;
        /* background: #E1B1B1; */
        transform: translate(0, -3rem);
        border-bottom: 7px solid #FFC831;
        span:nth-child(1) {
            margin: 0 0.5rem 0 0;
            /* display: none; */
        }
    }
    @media screen and (max-height: 710px) {
        display: none;
    }
`;

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #E1B1B1; */
    background: rgb(225,177,177);
    /* background: linear-gradient(45deg, rgba(225,177,177,1) 0%, rgba(193,152,167,1) 100%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const div = styled.div`
    width: 58rem;
    /* width: 90%; */
    background: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 5px #CA9F9F;
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
        /* -webkit-appearance: none; */
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: lightgray;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: darkgray;
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
    @media screen and (max-width: 1050px) {
        width: 50rem;
        height: 32rem;
    }
    @media screen and (max-width: 920px) {
        width: 80vw;
        height: 30rem;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        background: #e3bfbf;
        border-radius: 0;
        padding-top: 3rem;
        padding-bottom: 0;
        margin-bottom: 0;
        box-shadow: none;
        transform: translateY(-2rem);
        overflow-x: hidden;
        overflow-y: scroll;
    }
    @media screen and (max-height: 710px) {
        /* @media screen and (max-width: 920px) { */
            transform: translateY(0.5rem);
            height: 70vh;
            overflow-y: auto;
        /* } */
    }
`;

const box = styled.div`
    width: 24.5rem;
    height: 13rem;
    position: relative;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    :hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1050px) {
        width: 20rem;
    }
    @media screen and (max-width: 920px) {
        width: 24.5rem;
        transform: translateY(-3rem);
    }
    @media screen and (max-width: 570px) {
        width: 70vw;
    }
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
    border-radius: 10px;
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
            width: ${modalWidth};
            position: relative;
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
                font-weight: bold;
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
                line-height: 2;
                padding: 0 0.5rem;
                border: 1px solid #fff;
                border-radius: 10px;
                font-size: 1rem;
                color: #fff;
                background: transparent;
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
                ul {
                    width: 0;
                    height: 0;
                    opacity: 0;
                    display: none;
                }
            `;
            return css`
                width: ${modalWidth};
                opacity: 1;
                ul {
                    width: ${modalWidth};
                    display: block;
                    opacity: 1;
                }
            `;
        }
    }}
    ${(props) => {
        if (props.className === 'first') {
            return css`
                background: #505B72;
                box-shadow: 0 0 3px #505B72;
                transform: translate(-1.6rem, 2rem);
                /* transform: translateY(2rem); */
                height: 28.5rem;
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translate(0.95rem, -1.5rem);
                    }
                }
                ul:nth-child(2) {
                    /* background: #E1D6CD; */
                    background: #505B72;
                    transform: translateY(-0.8rem);
                }
                @media screen and (max-width: 1050px) {
                    transform: translate(-3.5rem, 2rem);
                }
                @media screen and (max-width: 920px) {
                    ul:nth-child(1) {
                        display: none;
                    }
                    ul:nth-child(2) {
                        transform: translateY(-0.5rem);
                    }
                    height: 14rem;
                    transform: translate(-1.5rem, 0rem);
                }
                @media screen and (max-width: 570px) {
                    width: 70vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(70vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(70vw - 5rem - 2rem);
                            }
                        }
                        li:nth-child(1),li:nth-child(2),li:nth-child(3) {
                            display: none;
                        }
                        li:nth-child(4){
                            flex-direction: column;
                            a {
                                margin-bottom: 0.5rem;
                            }
                            button {
                                margin-top: 0.5rem;
                            }
                        }
                    }
                }
            `;
        }
        if (props.className === 'second'){
            return css`
                background: #766F88;
                box-shadow: 0 0 3px #766F88;
                transform: translate(-1.6rem, 2rem);
                /* transform: translateY(2rem); */
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translate(0.95rem, -1rem);
                    }
                }
                ul:nth-child(2) {
                    /* background: #F1D9AC; */
                    background: #766F88;
                    transform: translateY(-2rem);
                    li:nth-child(1) {
                        padding-top: 0.5rem;
                    }
                }
                @media screen and (max-width: 1050px) {
                    transform: translate(-3.5rem, 2rem);
                }
                @media screen and (max-width: 920px) {
                    ul:nth-child(1) {
                        display: none;
                    }
                    height: 14rem;
                    transform: translate(-1.5rem, 0rem);
                    ul:nth-child(2) {
                        transform: translateY(0rem);
                        li:nth-child(1) {
                            margin-top: 0;
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 70vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(70vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(70vw - 5rem - 2rem);
                            }
                        }
                        li:nth-child(1),li:nth-child(2),li:nth-child(3) {
                            display: none;
                        }
                        li:nth-child(4){
                            flex-direction: column;
                            a {
                                margin-bottom: 0.5rem;
                            }
                            button {
                                margin-top: 0.5rem;
                            }
                        }
                    }
                }
            `;
        }
        if (props.className === 'third'){
            return css`
                background: #766F88;
                box-shadow: 0 0 3px #766F88;
                transform: translate(-1.6rem, -3.5rem);
                /* transform: translateY(-3.5rem); */
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translate(0.95rem, -0.7rem);
                    }
                }
                ul:nth-child(2) {
                    background: #766F88;
                    transform: translateY(-2rem);
                    li:nth-child(1) {
                        padding-top: 1rem;
                    }
                }
                @media screen and (max-width: 1050px) {
                    transform: translate(-3.5rem, -3.5rem);
                }
                @media screen and (max-width: 920px) {
                    background: #505B72;
                    box-shadow: 0 0 3px #505B72;
                    ul:nth-child(1) {
                        display: none;
                    }
                    height: 14rem;
                    transform: translate(-1.5rem, 0rem);
                    ul:nth-child(2) {
                        background: #505B72;
                        transform: translateY(0rem);
                        li:nth-child(1) {
                            margin-top: 0;
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 70vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(70vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(70vw - 5rem - 2rem);
                            }
                        }
                        li:nth-child(1),li:nth-child(2),li:nth-child(3) {
                            display: none;
                        }
                        li:nth-child(4){
                            flex-direction: column;
                            a {
                                margin-bottom: 0.5rem;
                            }
                            button {
                                margin-top: 0.5rem;
                            }
                        }
                    }
                }
            `;
        }
        if (props.className === 'fourth'){
            return css`
                background: #505B72;
                box-shadow: 0 0 3px #505B72;
                transform: translate(-1.6rem, -3.5rem);
                /* transform: translateY(-3.5rem); */
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translate(0.95rem, -0.9rem);
                    }
                }
                ul:nth-child(2) {
                    background: #505B72;
                    transform: translateY(-1rem);
                }
                @media screen and (max-width: 1050px) {
                    transform: translate(-3.5rem, -3.5rem);
                }
                @media screen and (max-width: 920px) {
                    background: #766F88;
                    box-shadow: 0 0 3px #766F88;
                    ul:nth-child(1) {
                        display: none;
                    }
                    height: 14rem;
                    transform: translate(-1.5rem, 0rem);
                    ul:nth-child(2) {
                        background: #766F88;
                        transform: translateY(0rem);
                        li:nth-child(1) {
                            margin-top: 0;
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 70vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(70vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(70vw - 5rem - 2rem);
                            }
                        }
                        li:nth-child(1),li:nth-child(2),li:nth-child(3) {
                            display: none;
                        }
                        li:nth-child(4){
                            flex-direction: column;
                            a {
                                margin-bottom: 0.5rem;
                            }
                            button {
                                margin-top: 0.5rem;
                            }
                        }
                    }
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
    box-shadow: 3px 3px 5px black;
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