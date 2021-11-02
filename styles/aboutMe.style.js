import styled, { css } from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #FFC75F; */
    background: #2F4858;
    display: flex;
    align-items: center;
    justify-content: center;
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
            div {
                margin: 0.5rem 0;
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
`;


export {
    section,
    content,
    text,
    img
}