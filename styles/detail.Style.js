import styled, {css} from 'styled-components';

const box = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const container = styled.ul`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* overflow-y: auto; */
    background: #fff;
    /* scroll-behavior: smooth;
    scroll-snap-type: y mandatory; */
    li:nth-child(1){
        span {
            display: flex;
            flex-direction: row;
        }
    }
    button {
        position: sticky;
        top: 0;
        left: 0;
        width: 5rem;
        transform: translateX(calc(100vw - 5rem));
        z-index: 10;
    }
`;

const topContent = styled.li`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const content = styled.li`
    display: flex;
    height: 100vh;
    /* scroll-snap-align: center; */
`

const timeStamp = styled.span`
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
    topContent,
    content,
    timeStamp,
};