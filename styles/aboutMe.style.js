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
    height: 30rem;
    background: #fff;
`;


export {
    section,
    content
}