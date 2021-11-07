import styled from 'styled-components';

const section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #2F4858;
    overflow: hidden;
`;

const box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #fff;
    width: 60rem;
    height: 30rem;
    box-shadow: 3px 3px 5px black;
    @media screen and (max-width: 1100px) {
        width: 40rem;
        flex-direction: column;
    }
    @media screen and (max-width: 750px) {
        width: 90vw;
        background: #2F4858;
        box-shadow: none;
    }
    @media screen and (max-height: 580px) {
        height: 80vh;
    }
`;

const left = styled.div`
    width: 20rem;
    height: 30rem;
    background: #E2B646;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    p {
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
        text-shadow: 3px 3px 5px black;
        transform: translate(-2rem, 4rem);
    }
    @media screen and (max-width: 1100px) {
        width: 0;
        height: 0;
        p {
            transform: translate(5rem, -4.5rem);
            color: #E2B646;
            text-shadow: 1px 1px 1px black;
        }
    }
    @media screen and (max-width: 750px) {
        p {
            text-shadow: 2px 2px 3px black;
        }
    }
    @media screen and (max-width: 600px) {
        p {
            transform: translate(0.5rem, -4.5rem);
        }
    }
    @media screen and (max-width: 500px) {
        p {
            transform: translate(2rem, -4.5rem);
        }
    }
    @media screen and (max-height: 580px) {
        display: none;
        /* p {
            display: none;
        }
        div {
            transform: translate(calc(50vw - 10.5rem), -2.4rem);
        } */
    }
`;

const link = styled.div`
    width: 11rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transform: translate(-2rem, 5rem);
    a {
        width: 6rem;
        height: 2rem;
        border-radius: 10px;
        margin: 0.2rem;
        text-align: center;
        line-height: 2;
        transition: all 200ms ease-in-out;
        background: #fff;
        span {
            margin-left: 0.2rem;
        }
    }
    /* a:nth-child(1) {
        background: #fff;
    }
    a:nth-child(2) {
        background: #fff;
    } */
    a:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1100px) {
        width: 7rem;
        /* background: red; */
        transform: translate(16rem, -7.8rem);
        a {
            width: 2.8rem;
            height: 3rem;
            font-size: 2rem;
            line-height: 1.7;
            border-radius: 50%;
            color: #2F4858;
            margin: 0;
            /* background-color: #E8C56B; */
            span {
                display: none;
            }
        }
        a:hover {
            color :#E2B646;
        }
    }
    @media screen and (max-width: 750px) {
        transform: translate(calc(45vw - 1rem), -7.8rem);
        a {
            width: 3rem;
            border-radius: 10px;
            line-height: 1.5;
            margin-left: 0.5rem;
            background: rgb(255, 255, 255, 0.1);
            color: #fff;
            box-shadow: 1px 1px 3px black;
        }
    }
`;

const contents = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
    background: #fff;
    div {
        margin-right: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    @media screen and (max-width: 1100px) {
        transform: translateY(1.5rem);
    }
    @media screen and (max-width: 750px) {
        width: 90vw;
        background: #2F4858;
        /* transform: translateY(-1rem); */
        form {
            width: 90vw;
        }
    }
    @media screen and (max-height: 580px) {
        transform: translateY(-3vh);
    }
`;

const input = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 1rem;
    /* border: 1px solid black; */
    label {
        width: 5rem;
        height: 2rem;
        line-height: 2;
        text-align: start;
        margin-right: 1rem;
        font-weight: bold;
    }
    input, textarea {
        border: none;
        background: #e3e3e3;
        width: 25rem;
        height: 2rem;
        padding: 0 0.5rem;
        caret-color: black;
        outline: none;
        border-radius: 10px;
    }
    textarea {
        height: 7rem;
        padding: 0.5rem;
        resize: none;
        /* overflow: hidden; */
        ::-webkit-scrollbar {
            width: 10px;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-track {
            background-color: lightgray;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 3px;
            background-color: darkgray;
        }
        ::-webkit-scrollbar-button {
            width: 0;
            height: 0;
        }
    }
    input:hover,
    textarea:hover {
        border: 2.5px solid black;
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        input, textarea {
            width: calc(100% - 8rem);
            background: rgb(255, 255, 255, 0.1);
            color: #fff;
            box-shadow: 2px 2px 3px black;
        }
        label {
            color: #fff;
            text-shadow: 2px 2px 3px black;
        }
        input:hover,
        textarea:hover {
            border: 2px solid #fff;
        }
    }
`;

const send = styled.input`
    width: 31rem;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 10px;
    background: rgb(226, 182, 70, 0.8);
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    transition: color 200ms ease-in-out;
    :hover {
        cursor: pointer;
        background: rgb(226, 182, 70, 1);
    }
    @media screen and (max-width: 750px) {
        width: 86vw;
        transform: translate(2vw, 0.5rem);
        box-shadow: 2px 2px 3px black;
    }
`;

const loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    section,
    box,
    left,
    contents,
    input,
    send,
    link,
    loading
}