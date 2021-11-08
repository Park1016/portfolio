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
        position: relative;
        margin-top: 2rem;
        width: 14rem;
        height: 2.5rem;
        transform: translate(0);
        border-bottom: 7px solid #FFC831;
        span:nth-child(1) {
            margin: 0 0.5rem 0 0;
        }
    }
    @media screen and (min-width: 921px) {
        @media screen and (max-height: 720px) {
            display: none;
        }
        @media screen and (max-height: 650px) {
            display: block;
            transform: translate(-1.5rem, -3.5rem);
        }
    }
`;

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #E1B1B1; */
    background: rgb(225, 177, 177);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media screen and (max-width: 920px) {
        justify-content: flex-start;
        ${(props) => {
            if(props.nav === 'home') {
                return css`
                    height: auto;
                `;
            } else {
                return css`
                    height: calc(100vh - 4rem);
                    overflow-y: auto;
                    ::-webkit-scrollbar {
                        width: 10px;
                    }
                    ::-webkit-scrollbar-track {
                        background-color: lightgray;
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: darkgray;
                    }
                    ::-webkit-scrollbar-button {
                        width: 0;
                        height: 0;
                    }
                `;
            }
        }}
    }
    @media screen and (max-height: 650px) {
        height: auto;
        @media screen and (max-width: 920px) {
            padding: 4rem 0 4rem 0;
        }
        @media screen and (min-width: 921px) {
            padding: 6rem 0 4rem 0;
        }
    }
`;

const div = styled.div`
    width: 58rem;
    background: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 5px #CA9F9F;
    padding: 2rem 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    @media screen and (max-width: 1050px) {
        width: 50rem;
        height: 32rem;
    }
    @media screen and (max-width: 920px) {
        width: 100vw;
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
        background: transparent;
        border-radius: 0;
        padding-bottom: 0;
        margin-bottom: 0;
        transform: translateY(2rem);
        box-shadow: none;
        @media screen and (max-height: 650px) {
            padding: 0 0 2rem 0;
        }
        @media screen and (min-height: 651px) {     
            padding: 3rem 0 2rem 0;
        }
    }
    @media screen and (max-height: 600px) {
        @media screen and (min-width: 821px) {
            transform: translateY(1rem);
            height: 80vh;
        }
    }
    @media screen and (max-height: 650px) {
        min-height: 32rem;
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
        @media screen and (max-height: 650px) {
            transform: translateY(0);
        }
        @media screen and (min-height: 651px) {
            transform: translateY(-3rem);
        }
    }
    @media screen and (max-width: 570px) {
        width: 85vw;
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
        li {
            width: calc(27.5rem - 3.5rem);
            display: flex;
            flex-direction: row;
            margin: 0.5rem 0 0.5rem 2.8rem;
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
                height: 28.5rem;
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translate(0.95rem, -1.5rem);
                    }
                }
                ul:nth-child(2) {
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
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0rem);
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(85vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(85vw - 5rem - 2rem);
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
                @media screen and (max-height: 710px) {
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0);
                    @media screen and (max-width: 1050px) {
                        width: 20rem;
                        ul:nth-child(2){
                            li:nth-child(1), li:nth-child(2), li:nth-child(3) {
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
                    @media screen and (max-width: 920px) {
                        width: 24.5rem;
                        ul:nth-child(2){
                            li:nth-child(4){
                                flex-direction: row;
                                a {
                                    margin-bottom: 0;
                                }
                                button {
                                    margin-top: 0;
                                }
                            }
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                }
            `;
        }
        if (props.className === 'second'){
            return css`
                background: #766F88;
                box-shadow: 0 0 3px #766F88;
                transform: translate(-1.6rem, 2rem);
                height: ${modalHeight};
                ul:nth-child(1) {
                    li:nth-child(1) {
                        transform: translate(0.95rem, -1rem);
                    }
                }
                ul:nth-child(2) {
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
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        transform: translateY(0rem);
                        li:nth-child(1) {
                            margin-top: 0;
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(85vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(85vw - 5rem - 2rem);
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
                @media screen and (max-height: 710px) {
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0);
                    ul:nth-child(2) {
                        transform: translateY(-1rem);
                    }
                    @media screen and (max-width: 1050px) {
                        width: 20rem;
                        ul:nth-child(2){
                            li:nth-child(1), li:nth-child(2), li:nth-child(3) {
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
                    @media screen and (max-width: 920px) {
                        width: 24.5rem;
                        ul:nth-child(2){
                            li:nth-child(4){
                                flex-direction: row;
                                a {
                                    margin-bottom: 0;
                                }
                                button {
                                    margin-top: 0;
                                }
                            }
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                }
            `;
        }
        if (props.className === 'third'){
            return css`
                background: #766F88;
                box-shadow: 0 0 3px #766F88;
                transform: translate(-1.6rem, -3.5rem);
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
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        background: #505B72;
                        transform: translateY(0rem);
                        li:nth-child(1) {
                            margin-top: 0;
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(85vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(85vw - 5rem - 2rem);
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
                @media screen and (max-height: 710px) {
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0);
                    ul:nth-child(2) {
                        transform: translateY(-1rem);
                    }
                    @media screen and (max-width: 1050px) {
                        width: 20rem;
                        ul:nth-child(2){
                            li:nth-child(1), li:nth-child(2), li:nth-child(3) {
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
                    @media screen and (max-width: 920px) {
                        width: 24.5rem;
                        ul:nth-child(2){
                            li:nth-child(4){
                                flex-direction: row;
                                a {
                                    margin-bottom: 0;
                                }
                                button {
                                    margin-top: 0;
                                }
                            }
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                }
            `;
        }
        if (props.className === 'fourth'){
            return css`
                background: #505B72;
                box-shadow: 0 0 3px #505B72;
                transform: translate(-1.6rem, -3.5rem);
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
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        background: #766F88;
                        transform: translateY(0rem);
                        li:nth-child(1) {
                            margin-top: 0;
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                    transform: translate(0rem, 0rem);
                    ul:nth-child(2) {
                        li {
                            width: calc(85vw - 5rem);
                            margin: 0.5rem 0 0.5rem 4.7rem;
                            span:nth-child(2) {
                                width: calc(85vw - 5rem - 2rem);
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
                @media screen and (max-height: 710px) {
                    width: 24.5rem;
                    height: 14rem;
                    transform: translate(0rem, 0);
                    @media screen and (max-width: 1050px) {
                        width: 20rem;
                        ul:nth-child(2){
                            li:nth-child(1), li:nth-child(2), li:nth-child(3) {
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
                    @media screen and (max-width: 920px) {
                        width: 24.5rem;
                        ul:nth-child(2){
                            li:nth-child(4){
                                flex-direction: row;
                                a {
                                    margin-bottom: 0;
                                }
                                button {
                                    margin-top: 0;
                                }
                            }
                        }
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 85vw;
                }
            `;
        }
    }}
    @media screen and (max-height: 710px) {
        @media screen and (min-width: 921px) {
            ul:nth-child(1) {
                display: none;
            }
        }
    }
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
    position: relative;
    width: 24.75rem;
    height: 13rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 5px black;
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
    @media screen and (max-width: 920px) {
        box-shadow: 2px 2px 5px black;
    }
    @media screen and (max-width: 570px) {
        width: 85vw;
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