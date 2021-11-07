import styled, {css} from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #E2B646; */
    background: rgb(0, 166, 190, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 920px) {
        flex-direction: column;
        /* align-items: flex-end; */
        justify-content: flex-start;
        position: relative;
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
                        width: 5px;
                    }
                    ::-webkit-scrollbar-track {
                        background-color: lightgray;
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: #FFC831;
                    }
                    ::-webkit-scrollbar-button {
                        width: 0;
                        height: 0;
                    }
                `;
            }
        }}
    }
`;

const ul = styled.ul`
    width: 70rem;
    height: 32rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    overflow-x: hidden;
    transform: translate(-3.5rem, 1rem);
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: lightgray;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFC831;
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
    li {
        background: #fff;
        border-radius: 20px;
        width: 7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0 1rem;
        box-shadow: 3px 3px 5px rgb(0, 0, 0, 0.5);
    }
    li:hover {
        transform: scale(1.01);
    }
    @media screen and (max-width: 950px) {
        width: 100%;
        /* height: 90%; */
        height: 33rem;
        flex-wrap: wrap;
        flex-direction: row;
        transform: translate(-3.5rem, 1rem);
        li {
            flex-direction: row;
            width: auto;
            height: 10rem;
            padding-right: 0.5rem;
            margin: 0.5rem;
        }
    }
    @media screen and (max-width: 920px) {
        display: none;
    }
    @media screen and (min-width: 921px) {
        @media screen and (max-height: 640px) {
            display: none;
        }
    }
    @media screen and (max-height: 650px) {
        @media screen and (min-width: 921px) {
            /* overflow-x: hidden;
            overflow-y: auto; */
            overflow: hidden;
        }
        @media screen and (max-width: 950px) {
            transform: translate(-3.5rem, 0rem);
        }
    }
    @media screen and (max-width: 672px) {
        transform: translate(-3.5rem, 0rem);
        overflow-x: hidden;
        overflow-y: auto;
        height: 90%;
        background: rgb(255,255,255,0.3);
        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background-color: lightgray;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: rgb(255,200,49,0.8);
        }
        ::-webkit-scrollbar-button {
            width: 0;
            height: 0;
        }
    }
    @media screen and (max-height: 651px) {
        @media screen and (max-width: 950px) {
            /* background: rgb(255,255,255,0.3); */
            height: 80vh;
        }  
    }
    @media screen and (max-height: 710px) {
        @media screen and (min-width: 950px) {
            height: 80vh;
        }
    }
    @media screen and (min-width: 950px) {
        @media screen and (max-height: 620px) {
            /* background: rgb(255,255,255,0.3); */
            /* padding-bottom: 1rem; */
        }
    }
`;

const resDiv = styled.div`
    position: relative;
    background: #fff;
    width: 90vw;
    /* height: calc(100vh - 10rem); */
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    border-radius: 20px;
    box-shadow: 2px 2px 3px black;
    @media screen and (min-width: 921px) {
        /* display: none; */
        @media screen and (max-height: 640px) {
            display: flex;
        }
        @media screen and (min-height: 641px) {
            display: none;
        }
    }
`;

const title = styled.p`
    color: #fff;
    font-size: 3rem;
    width: 7rem;
    height: 3.8rem;
    text-align: center;
    text-shadow: 3px 3px 5px black;
    /* transform: translate(34.8rem, -18rem); */
    transform: translate(2rem, -14rem);
    border-bottom: 8px solid #FFC831;
    @media screen and (max-width: 1200px) {
        @media screen and (min-height: 641px) {
            /* transform: translate(calc(50vw - 3.5rem), -18.5rem); */
        }
    }
    @media screen and (max-width: 920px) {
        /* width: 90vw;
        border-bottom: none;
        border-radius: 20px 20px 0 0;
        background: #FFC831;
        margin-top: 1.5rem;
        text-shadow: 1px 1px 1px black;
        height: 4rem;
        line-height: 1.2; */
    }
    /* @media screen and (max-height: 710px) {
        @media screen and (min-width: 921px) {
            visibility: hidden;
            height: 80vh;
        }
    } */
    @media screen and (min-width: 921px) {
        @media screen and (max-height: 650px) {
            visibility: visible;
        }
        @media screen and (min-height: 651px) {
            height: 80vh;
            visibility: hidden;
        }
    }
`;

const item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        margin-top: 1rem;
        height: 5rem;
    }
    p {
        margin-bottom: 1rem;
        text-align: center;
        font-weight: bold;
    }
    @media screen and (max-width: 950px) {
        margin-right: 0.5rem;
    }
    @media screen and (max-width: 920px) {
        margin: 1rem 2rem;
    }
`;

const top = styled.span`
    background: #FFC831;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 3px black;
    width: 100%;
    height: 3rem;
    font-size: 1.2rem;
    @media screen and (max-width: 950px) {
        width: 3rem;
        height: 10rem;
        margin-right: 0.5rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: -7px;
        text-shadow: none;
        /* text-shadow: 1px 1px 1px black; */
    }
`;

export {
    section,
    title,
    top,
    item,
    ul,
    resDiv
}