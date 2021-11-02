import styled from 'styled-components';

const section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #2F4858;
    /* scroll-snap-align: center; */
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
        span {
            margin-left: 0.2rem;
        }
    }
    a:nth-child(1) {
        background: #fff;
    }
    a:nth-child(2) {
        background: #fff;
    }
    a:hover {
        cursor: pointer;
    }
`;

const contents = styled.div`
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
    :hover {
        cursor: pointer;
    }
`;

export {
    section,
    box,
    left,
    contents,
    input,
    send,
    link,
}