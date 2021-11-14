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
    @media screen and (max-width: 920px) {
        @media screen and (max-height: 721px) {
            display: none;
        }
        @media screen and (min-height: 720px) {
            display: block;
        }
    }
`;

const resBox = styled.div`
    overflow-y: auto;
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
    @media screen and (min-width: 921px) {
        @media screen and (max-height: 721px) {
            display: block;
        }
        @media screen and (min-height: 720px) {
            display: none;
        }
    }
`;

const container = styled.div`
    width: 100vw;
    height: calc(100vh - 4rem);
    overflow: hidden;
    background: #fff;
    button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 5rem;
        height: 2rem;
        z-index: 10;
        background: #766f88;
        border: none;
        border-radius: 20px;
        color: #fff;
        box-shadow: 2px 2px 3px #363636;
        transition: all 200ms ease-in-out;
    }
    button:hover {
        cursor: pointer;
        background: rgb(118,111,136,0.7);
    }
    @media screen and (max-width: 920px) {
        button {
            top: 0rem;
            right: 5px;
            border-radius: 0;
            box-shadow: none;
        }
        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background-color: lightgray;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #E7B52D;
        }
        ::-webkit-scrollbar-button {
            width: 0;
            height: 0;
        }
    }
    @media screen and (min-width: 921px) {
        @media screen and (max-height: 721px) {
            button {
            top: 0rem;
            right: 5px;
            border-radius: 0;
            box-shadow: none;
            }
            overflow-y: auto;
            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-track {
                background-color: lightgray;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #E7B52D;
            }
            ::-webkit-scrollbar-button {
                width: 0;
                height: 0;
            }
        }
    }
`;

const timeText = styled.p`
    display: none;
    :hover {
        cursor: pointer;
        background: rgb(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 1350px) {
        position: absolute;
        width: 11rem;
        text-align: center;
        top: 0;
        left: 0;
        transform: translate(0, -2.1rem);
        color: #FFC831;
        font-size: 1.2rem;
        font-weight: bold;
        text-shadow: 1px 1px 1px black;
        box-shadow: 2px 2px 3px #363636;
        background: rgb(255, 255, 255, 0.3);
        border-radius: 20px 20px 0 0;
        height: 2rem;
        line-height: 1.7;
        ${(props)=>{
            if(props.id === '1' || props.id === '2'){
                return css`
                    display: none;
                `;
            } else {
                return css`
                    display: block;
                `;
            }
        }}
    }
`;

const contentBox = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 920px) {
        margin-top: 5rem;
        padding-bottom: 5rem;
    }
`;

const content = styled.div`
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; */
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #E1B1B1;
    overflow: hidden;
    ${(props) => {
        if (props.className === 'detailFirst') {
            return css`
                background: #2F4858;
                @media screen and (max-width: 920px) {
                    height: auto;
                    min-height: 33rem;
                }
            `;
        }
        if (props.className === 'detailSecond'){
            return css`
                background: #2D3748;
                @media screen and (max-width: 920px) {
                    height: auto;
                }
                @media screen and (max-height: 600px) {
                    @media screen and (min-width: 950px) {
                        min-height: 630px;
                    }
                }
            `;
        }
        if (props.className === 'detailThird'){
            return css`
                background: #2F4858;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin: 0;
                @media screen and (max-width: 920px) {
                    height: auto;
                    padding-bottom: 5.1rem;
                }
                @media screen and (max-height: 720px) {
                    @media screen and (min-width: 921px) {
                        display: none;
                    }
                }
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
                @media screen and (max-width: 1350px) {
                    transform: translate(calc(40rem - 4.5rem), -1rem);
                }
                @media screen and (max-height: 650px) {
                    @media screen and (min-width: 921px) {
                        display: none;
                    }
                }
            `;
        }
        if (props.className === 'view'){
            return css`
                width: 8rem;
                color: #fff;
                text-shadow: 3px 3px 5px black;
                transform: translateX(-9rem);
                @media screen and (max-width: 1400px) {
                    transform: translate(0, -4rem);
                    @media screen and (max-height: 710px) {
                        @media screen and (min-width: 921px) {
                            display: none;
                        }
                    }
                }
                @media screen and (max-width: 920px) {
                    transform: translate(calc(50vw - 4rem), -4rem);
                    /* transform: translateX(-9rem); */
                    @media screen and (max-height: 710px) {
                        @media screen and (min-width: 921px) {
                            display: block;
                        }
                    }
                }
            `;
        }
        if (props.className === 'info' && props.id === '0'){
            return css`
                width: 7rem;
                transform: translateX(-10rem);
                color: #fff;
                text-shadow: 3px 3px 5px black;
                @media screen and (max-width: 1400px) {
                    transform: translate(0rem, 0rem);
                }
                @media screen and (max-width: 1150px) {
                    transform: translateX(13rem);
                }
                @media screen and (max-width: 620px) {
                    transform: translateX(17rem);
                }
                @media screen and (max-width: 500px) {
                    display: none;
                }
                @media screen and (max-height: 710px) {
                    @media screen and (min-width: 921px) {
                        
                    }
                }
            `;
        } else {
            return css`
                width: 7rem;
                transform: translateX(-10rem);
                color: #fff;
                text-shadow: 3px 3px 5px black;
                @media screen and (max-width: 920px) {
                    transform: translate(6.5rem, -5rem);
                }
                /* @media screen and (max-width: 880px) {
                } */
                @media screen and (max-height: 710px) {
                    @media screen and (min-width: 921px) {
                        transform: translate(-10rem, -13vh);
                    }
                }
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
            if(props.id === '0'){
                return css`
                    width: 75rem;
                    transform: translate(calc((100vw - 60rem)/2), 2rem);
                `;
            } else {
                return css`
                    width: 75rem;
                    transform: translate(calc((100vw - 20rem)/2), 10rem);
                    @media screen and (max-width: 880px) {
                        width: 36rem;
                        /* transform: translate(calc((100vw - 20rem)/2), 10rem); */
                    }
                    @media screen and (max-width: 650px) {
                        width: 90vw;
                        /* transform: translate(calc((100vw - 20rem)/2), 10rem); */
                    }
                `;
            }
        }
        if (props.className === 'detailThird'){
            return css`
                width: 1094px;
                transform: translate(calc((100vw - 1094px)/2), 2rem);
                background: transparent;
                @media screen and (max-width: 1400px) {
                    transform: translate(calc((100vw - 1094px * 0.9)/2), 5rem);
                }
                @media screen and (max-width: 1200px) {
                    transform: translate(calc((100vw - 1094px * 0.8)/2), 5rem);
                }
                @media screen and (max-width: 1080px) {
                    transform: translate(calc((100vw - 1094px * 0.6)/2), 5rem);
                }
                @media screen and (max-width: 920px) {
                    transform: translate(0, 5rem);
                }
                /* @media screen and (max-width: 750px) {
                    transform: translate(calc((100vw - 1094px * 0.5)/2), 5rem);
                }
                @media screen and (max-width: 650px) {
                    transform: translate(calc((100vw - 1094px * 0.4)/2), 5rem);
                } */
            `;
        }
    }}
    @media screen and (max-width: 1350px) {
        div {
            position: relative;
        }
    }
    @media screen and (max-width: 920px) {
        height: auto;
    }
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
    ${(props)=>{
        if(props.time){
            return css`
                display: flex;
            `;
        }
        if(!props.time){
            return css`
                display: none;
                @media screen and (min-width: 1350px) {
                    display: flex;
                }
            `;
        }
    }}
    @media screen and (max-width: 1350px) {
        position: absolute;
        top: 0;
        left: -1rem;
        height: 25rem;
        align-items: center;
        justify-content: center;
        transform: translate(-0.05rem, -0.1rem);
        border-radius: 0 0 10px 10px;
        box-shadow: none;
        background: #445B69;
        p {
            display: none;
        }
        span {
            transform: translateY(-0.3rem);
        }
    }
    @media screen and (max-height: 710px) {
        @media screen and (min-width: 921px) {
            p {
                transform: translateY(-2vh);
            }
            @media screen and (max-height: 630px) {
                p {
                    display: none;
                }
            }
        }
    }
`;

const detailUl = styled.ul`
    border-left: 1px solid rgb(255, 200, 49, 0.8);
    li {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        width: 70rem;
        color: #fff;
        div:nth-child(1) {
            width: 5.5rem;
            margin: 0 1rem;
            color: #FFC831;
            font-weight: bold;
            text-align: end;
            /* text-shadow: 3px 3px 3px black; */
        }
        div:nth-child(2) {
            /* width: 27rem; */
            display: flex;
        }
    }
    li:nth-child(2) {
        white-space: pre-wrap;
    }
    li:nth-child(4) {
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
    li:nth-child(5) {
        div:nth-child(2) {
            p {
                span {
                    white-space: pre-wrap;
                }
            }
        }
    }
    li:nth-child(6) {
        a {
            /* border: 1px solid #fff; */
            box-shadow: 1px 1px 2px black;
            margin-right: 0.5rem;
            border-radius: 10px;
            width: 6.5rem;
            height: 2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            transition: all 200ms ease-in-out;
            background: rgb(255,255,255,0.2);
            span {
                margin-left: 0.3rem;
            }
        }
    }
    li:nth-child(6) > a:hover {
        background: #fff;
        color: #2D3748;
        font-weight: bold;
    }
    ${(props) => {
        if(props.id === '0'){
            return css`
                li:nth-child(5) {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1px dashed rgb(255, 200, 49, 0.8);
                    div:nth-child(2) { 
                        display: flex;
                        width: 60rem;
                        flex-wrap: wrap;
                        /* align-items: center;
                        justify-content: center; */
                        p {
                            display: flex;
                            flex-direction: row;
                            margin-bottom: 1rem;
                            span:nth-child(1){
                                width: 5.5rem;
                                margin: 0 0.5rem;
                                display: flex;
                                align-items: flex-start;
                                justify-content: flex-end;
                                /* color: rgb(255, 200, 49, 0.8); */
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
                        }
                    }
                }
                li:nth-child(6) {
                    flex-direction: column;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: translate(-9.75rem, 4rem);
                    a {
                        margin-bottom: 1rem;
                    }
                }
                @media screen and (max-width: 1400px) {
                    border: none;
                    border-top: 1px solid rgb(255, 200, 49, 0.8);
                    transform: translate(-5.5rem, 4rem);
                    width: 70rem;
                    li:nth-child(5) {
                        /* div:nth-child(1){
                            transform: translateY(0.3rem);
                        } */
                        /* div:nth-child(2){
                            p {
                                span:nth-child(2) {
                                    color: #fff;
                                }
                            }
                        } */
                    }
                    li:nth-child(6) {
                        flex-direction: row;
                        position: absolute;
                        top: 0;
                        left: 0;
                        transform: translate(15rem, -4.4rem);
                        width: 15rem;
                        a {
                            margin-bottom: 1rem;
                        }
                    }
                }
                @media screen and (max-width: 1150px) {
                    transform: translate(10rem, 4rem);
                    width: 40rem;
                    li {
                        width: 40rem;
                        div:nth-child(2) {
                            width: calc(40rem - 6rem);
                        }
                    }
                    li:nth-child(4) {
                        margin-bottom: 0;
                        div:nth-child(2) {
                            flex-wrap: wrap;
                            p {
                                margin-bottom: 0.5rem;
                            }
                        }
                    }
                    li:nth-child(5) {
                        div:nth-child(1){
                            transform: translateY(0.3rem);
                        }
                        div:nth-child(2) {
                            flex-wrap: nowrap;
                            width: calc(40rem - 6rem);
                            p {
                                span:nth-child(1) {
                                    border-radius: 10px;
                                    border: 1px solid #D5AB35;
                                    justify-content: center;
                                    height: 2rem;
                                    line-height: 1.8;
                                    width: 6rem;
                                    :hover {
                                        cursor: pointer;
                                        background: #C09D37;
                                        color: #fff;
                                    }
                                }
                                /* span:nth-child(2) {
                                    position: absolute;
                                    transform: translateY(2.5rem);
                                }    */
                            }
                            p:nth-child(1) {
                                padding: 0;
                                margin: 0;
                            }
                            p:nth-child(2) {
                                padding: 0;
                                margin: 0;
                            }
                            p:nth-child(3) {
                                padding: 0;
                                margin: 0;
                            }
                        }
                    }
                    li:nth-child(6) {
                        transform: translate(13rem, -4.4rem);
                        width: 15rem;
                    }
                }
                @media screen and (max-width: 920px) {
                    padding-bottom: 22rem;
                    /* li:nth-child(6) {
                        position: relative;
                        transform: translate(0);
                    } */
                }
                @media screen and (max-width: 850px) {
                    transform: translate(10rem, 4rem);
                    width: 80vw;
                    li {
                        width: 80vw;
                        div:nth-child(2) {
                            width: calc(80vw - 6rem);
                        }
                    }
                    li:nth-child(5) {
                        div:nth-child(2) {
                            flex-wrap: nowrap;
                            width: calc(80vw - 6rem);
                            p {
                                span:nth-child(1) {
                                    border-radius: 10px;
                                    border: 1px solid #D5AB35;
                                    justify-content: center;
                                    height: 2rem;
                                    line-height: 1.8;
                                    width: 6rem;
                                    :hover {
                                        cursor: pointer;
                                        background: #C09D37;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                    li:nth-child(6) {
                        transform: translate(13rem, -4.4rem);
                        width: 15rem;
                    }
                }
                @media screen and (max-width: 740px) {
                    transform: translate(12rem, 4rem);
                }
                @media screen and (max-width: 620px) {
                    transform: translate(15rem, 4rem);
                    li:nth-child(5) {
                        div:nth-child(1) {
                            display: none;
                        }
                        div:nth-child(2) {
                            transform: translateX(3rem);
                        }
                    }
                    li:nth-child(6) {
                        transform: translate(10rem, -4.4rem);
                    }
                }
                @media screen and (max-width: 500px) {
                    transform: translate(17rem, 4rem);
                    li:nth-child(5) {
                        div:nth-child(2) {
                            transform: translateX(8vw);
                        }
                    }
                    li:nth-child(6) {
                        transform: translate(6rem, -4.4rem);
                    }
                }
                @media screen and (max-width: 460px) {
                    border: none;
                    transform: translate(18.5rem, 4rem);
                    li:nth-child(5) {
                        border: none;
                        div:nth-child(2) {
                            transform: translateX(4vw);
                        }
                    }
                    li:nth-child(6) {
                        transform: translate(18vw, -4.4rem);
                    }
                }
                @media screen and (max-width: 380px) {
                    li:nth-child(6) {
                        transform: translate(21vw, -4.4rem);
                    }
                }
            `;
        } else {
            return css`
                li {
                    div:nth-child(2) {
                        width: 27rem;
                    }
                }
                li:nth-child(5) {
                    div:nth-child(2) { 
                        display: flex;
                        flex-direction: column;
                        p {
                            margin-bottom: 0.5rem;
                        }
                    }
                }
                li:nth-child(6) {
                    margin-left: 1.5rem;
                }
                @media screen and (max-width: 920px) {
                    border: none;
                    border-top: 1px solid #D5AB35;
                    padding-bottom: 15rem;
                    transform: translate(-15vw, 0);
                    width: 70vw;
                    li:nth-child(2) {
                        div:nth-child(2) {
                            width: 50vw;
                        }
                    }
                }
                @media screen and (max-width: 700px) {
                    border: none;
                    transform: translateX(-10vw);
                }
                @media screen and (max-width: 400px) {
                    transform: translateX(-5vw);
                    li:nth-child(4) {
                        div:nth-child(2) {
                            width: 50vw;
                            flex-wrap: wrap;
                            p {
                                margin-bottom: 0.5rem;
                            }
                        }
                    }
                }
                /* @media screen and (max-width: 880px) {
                    border: none;
                    width: 36rem;
                    border-top: 1px solid rgb(255, 200, 49, 0.8);
                    transform: translateX(-7.5rem);
                    li {
                        width: 36rem;
                        margin-right: 0;
                    }
                    li:nth-child(6) {
                        transform: translateX(9rem);
                    }
                }
                @media screen and (max-width: 650px) {
                    width: 90vw;
                    transform: translateX(-18vw);
                    li {
                        width: 90vw;
                        div:nth-child(2){
                            width: calc(90vw - 6rem);
                        }
                    }
                    li:nth-child(6) {
                        transform: translateX(9rem);
                    }
                }
                @media screen and (max-width: 570px) {
                    width: 80vw;
                    transform: translateX(-9vw);
                    li {
                        width: 80vw;
                        div:nth-child(2){
                            width: calc(80vw - 6rem);
                        }
                    }
                    li:nth-child(6) {
                        transform: translateX(5rem);
                    }
                } */
                @media screen and (max-height: 710px) {
                    @media screen and (min-width: 921px) {
                        transform: translate(0, -12vh);
                        /* border: none; */
                    }
                    /* @media screen and (max-width: 720px) {
                        transform: translateX(12rem);
                    }
                    @media screen and (max-width: 610px) {
                        transform: translateX(15rem);
                    }
                    @media screen and (max-width: 500px) {
                        transform: translateX(17rem);
                    }
                    @media screen and (max-width: 430px) {
                        transform: translateX(19rem);
                    } */
                }
            `;
        }
    }}
    @media screen and (max-width: 920px) {
        height: auto;
        /* min-height: 30rem; */
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
    @media screen and (max-width: 920px) {
        display: none;
    }
`;

const loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 1094px;
    height: 615px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2F4858;
    @media screen and (max-width: 1400px) {
        width: calc(1094px * 0.9);
        /* height: calc(615px * 0.9); */
    }
    @media screen and (max-width: 1200px) {
        width: calc(1094px * 0.8);
    }
    @media screen and (max-width: 1080px) {
        width: calc(1094px * 0.6);
    }
    @media screen and (max-width: 750px) {
        width: calc(1094px * 0.5);
    }
    @media screen and (max-width: 650px) {
        width: calc(1094px * 0.4);
    }
`;

const videoBox = styled.div`
    position: relative;
    width: 921px;
    height: 70vh;
    @media screen and (max-width: 1150px) {
        width: calc(921px * 0.9);
        height: calc(70vh * 0.9);
        @media screen and (min-height: 750px) {
            @media screen and (min-width: 921px) {
                max-height: 30rem;
            }
        }
    }
    @media screen and (max-width: 950px) {
        width: calc(921px * 0.7);
        height: calc(70vh * 0.7);
    }
    @media screen and (max-width: 750px) {
        width: calc(921px * 0.6);
        height: calc(70vh * 0.6);
    }
    @media screen and (max-width: 650px) {
        width: calc(921px * 0.5);
        height: calc(70vh * 0.5);
    }
    @media screen and (max-width: 520px) {
        width: 100vw;
        height: calc(100vw * 0.56);
    }
`;

const view = styled.div`
    width: 1094px;
    height: 615px;
    position: relative;
    margin: 0;
    @media screen and (max-width: 1400px) {
        width: calc(1094px * 0.9);
        height: calc(615px * 0.9);
        @media screen and (max-height: 710px) {
            @media screen and (min-width: 921px) {
                height: 70vh;
                transform: translateY(-1rem);
            }
        }
    }
    @media screen and (max-width: 1200px) {
        width: calc(1094px * 0.8);
        /* height: calc(615px * 0.8); */
    }
    @media screen and (max-width: 1080px) {
        width: calc(1094px * 0.6);
        /* height: calc(615px * 0.7); */
    }
    @media screen and (max-width: 920px) {
        width: calc(100vw - 0.6rem);
        height: calc(100vh - 9rem);
    }
    /* @media screen and (max-width: 750px) {
        width: calc(1094px * 0.5);
    }
    @media screen and (max-width: 650px) {
        width: calc(1094px * 0.4);
    } */
`;

const toggle = styled.div`
    ${(props)=>{
        if(props.id === '0'){
            return css`
                p {
                    span:nth-child(1) {
                        color: rgb(255, 200, 49, 0.8);
                    }
                }
            `;
        }
    }}
    /* p {
        span:nth-child(1) {
            color: rgb(255, 200, 49, 0.8);
        }
    } */
    @media screen and (max-width: 1150px) {
        /* span:nth-child(2) {
            transform: translateY(2.5rem);
        } */
        ${(props)=>{
            if(props.id === '0') {
                if(!props.one && !props.two && !props.zero){
                    return css`
                        p {
                            span:nth-child(2) {
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(1) {
                            color: #2D3748;
                        }
                        p:nth-child(2) {
                            color: #2D3748;
                        }
                        p:nth-child(3) {
                            color: #2D3748;
                        }
                    `;
                }
                if(props.one) {
                    return css`
                        p:nth-child(1) {
                            color: #2D3748;
                            z-index: 10;
                            span:nth-child(1) {
                                color: #C09D37;
                                background: transparent;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(3) {
                            color: #2D3748;
                            z-index: 10;
                            span:nth-child(1) {
                                color: #C09D37;
                                background: transparent;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(2) {
                            color: #fff;
                            z-index: 11;
                            span:nth-child(1) {
                                background: #C09D37;
                                color: #fff;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                                width: 80vw;
                            }
                        }
                    `;
                }
                if(props.two) {
                    return css`
                        p:nth-child(1) {
                            color: #2D3748;
                            z-index: 10;
                            span:nth-child(1) {
                                color: #C09D37;
                                background: transparent;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(2) {
                            color: #2D3748;
                            z-index: 10;
                            span:nth-child(1) {
                                color: #C09D37;
                                background: transparent;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(3) {
                            color: #fff;
                            z-index: 11;
                            span:nth-child(1) {
                                background: #C09D37;
                                color: #fff;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                    `;
                }
                if(props.zero) {
                    return css`
                        p:nth-child(3) {
                            color: #2D3748;
                            z-index: 10;
                            span:nth-child(1) {
                                color: #C09D37;
                                background: transparent;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(2) {
                            color: #2D3748;
                            z-index: 10;
                            span:nth-child(1) {
                                color: #C09D37;
                                background: transparent;
                            }
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(1) {
                            color: #fff;
                            z-index: 11;
                            span:nth-child(1) {
                                background: #C09D37;
                                color: #fff;
                            }
                            span:nth-child(2){
                                width: 80vw;
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                    `;
                }
            }
        }}
    }
    @media screen and (max-width: 860px) {
        ${(props)=>{
            if(props.id === '0') {
                if(props.one){
                    return css`
                        p:nth-child(1) {
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(3) {
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(2) {
                            span:nth-child(2){
                                position: absolute;
                                transform: translate(-7rem ,2.5rem);
                            }
                        }
                    `;
                }
                if(props.two){
                    return css`
                        p:nth-child(1) {
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(2) {
                            span:nth-child(2){
                                position: absolute;
                                transform: translateY(2.5rem);
                            }
                        }
                        p:nth-child(3) {
                            span:nth-child(2){
                                width: 25rem;
                                position: absolute;
                                transform: translate(-19rem, 2.5rem);
                            }
                        }
                    `;
                }
                if(props.zero){
                }
            }
        }}
    }
    @media screen and (max-width: 620px) {
        ${(props)=>{
            if(props.id === '0') {
                if(props.two){
                    return css`
                        p:nth-child(3) {
                            span:nth-child(2){
                                width: 80vw;
                                transform: translate(-16rem, 2.5rem);
                            }
                        }
                    `;
                }
            }
        }}
    }
    @media screen and (max-width: 460px) {
        ${(props)=>{
            if(props.id === '0') {
                if(props.two){
                    return css`
                        p:nth-child(3) {
                            span:nth-child(2){
                                width: 85vw;
                                transform: translate(-15rem, 2.5rem);
                            }
                        }
                    `;
                }
            }
        }}
    }
    @media screen and (max-width: 400px) {
        ${(props)=>{
            if(props.id === '0') {
                if(props.two){
                    return css`
                        p:nth-child(3) {
                            span:nth-child(2){
                                width: 90vw;
                                transform: translate(-14rem, 2.5rem);
                            }
                        }
                    `;
                }
            }
        }}
    }
    @media screen and (max-height: 710px) {
        @media screen and (min-width: 921px) {
            ${(props)=>{
                if(props.id === '0') {
                    if(props.two){
                        // return css`
                        //     p:nth-child(3) {
                        //         span:nth-child(2){
                        //             width: 50vw;
                        //             transform: translate(-14rem, 2.5rem);
                        //         }
                        //     }
                        // `;
                    }
                }
            }}
        }
    }
`;

export {
    box,
    container,
    detailUl,
    content,
    contentBox,
    contentInner,
    videoBox,
    timeStamp,
    timeText,
    alert,
    Title,
    view,
    loading,
    toggle,
    resBox
};