import styled, {css} from 'styled-components';

const box = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const container = styled.ul`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    li:nth-child(1){
        display: flex;
        flex-direction: row;
    }
`;

const content = styled.li`
    height: 100vh;
    scroll-snap-align: center;
`

const timeStamp = styled.div`
    display: flex;
    flex-direction: row;
    span {
        white-space: pre-wrap;
    }
    span:nth-child(1){
        color: blue;
        margin-right: 0.5rem;
    }
`;

export {
    box,
    container,
    content,
    timeStamp,
};