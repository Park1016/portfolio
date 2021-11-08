import styled, {css} from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    background: rgb(0, 166, 190, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 920px) {
        flex-direction: column;
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
    @media screen and (max-height: 650px) {
        flex-direction: column;
        justify-content: flex-start;
        @media screen and (min-width: 951px) {
            height: 42rem;
        }
        @media screen and (max-width: 950px) {
            padding-bottom: 2rem;
            height: auto;
        }
    }
`;

const ul = styled.ul`
    width: auto;
    height: 32rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    transform: translate(0);
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
    @media screen and (max-width: 1100px) {
        width: 55vw;
        height: auto;
        flex-wrap: wrap;
        flex-direction: row;
        transform: translate(0);
        li {
            flex-direction: row;
            width: auto;
            height: 10rem;
            padding-right: 0.5rem;
            margin: 0.5rem;
        }
    }
    @media screen and (max-width: 1000px) {
        width: 60vw;
    }
    @media screen and (max-width: 950px) {
        width: 65vw;
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
        margin-top: 3rem;
    }
`;

const resDiv = styled.div`
    position: relative;
    background: #fff;
    width: 90vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 3rem 0 1.5rem 0;
    border-radius: 20px;
    box-shadow: 2px 2px 3px black;
    @media screen and (min-width: 921px) {
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
    transform: translate(-1rem, -14rem);
    border-bottom: 8px solid #FFC831;

    @media screen and (max-width: 920px) {
        transform: translate(0, 1rem);
    }
    @media screen and (max-height: 650px) {
        transform: translate(0, 1rem);
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
    @media screen and (max-width: 1100px) {
        width: 3rem;
        height: 10rem;
        margin-right: 0.5rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: -7px;
        text-shadow: none;
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