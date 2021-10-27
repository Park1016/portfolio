import styled from 'styled-components';

const section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #fff;
    /* scroll-snap-align: center; */
`;

const link = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
        width: 6rem;
        height: 2rem;
        border-radius: 10px;
        margin: 0 0.2rem;
        text-align: center;
        line-height: 2;
        span {
            margin-left: 0.2rem;
        }
    }
    a:nth-child(1) {
        background: red;
    }
    a:nth-child(2) {
        background: blue;
    }
    a:hover {
        cursor: pointer;
    }
`;

const contents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

export {
    section,
    contents,
    link,
}