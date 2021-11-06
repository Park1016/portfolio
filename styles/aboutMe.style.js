import styled, { css } from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #FFC75F; */
    background: #2F4858;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const content = styled.div`
    width: 70rem;
    /* height: 30rem; */
    height: 100vh;
    /* background: #fff; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p, ul {
        width: 45rem;
        color: #fff;
        font-size: 1.1rem;
    }
    ul {
        margin-top: 1rem;
        li {
            margin: 0.5rem 0;
            p {
                color: rgb(226,182,70);
                /* font-weight: bold; */
            }
            p:hover {
                cursor: pointer;
            }
            div {
                margin: 0.5rem 0;
                background: rgb(255,255,255,0.1);
                border-radius: 10px;
                padding: 0.5rem 0.7rem;
            }
        }
    }
`;

const text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const img = styled.div`
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 2rem;
    /* box-shadow: 3px 3px 10px black; */
`;


export {
    section,
    content,
    text,
    img
}