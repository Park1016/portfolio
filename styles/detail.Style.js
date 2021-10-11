import styled, {css} from 'styled-components';

const box = styled.div`
    width: 100vw;
    height: calc(100vh - 4rem);
    transform: translateY(4rem);
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: lightblue;
`;

const container = styled.ul`
    width: 100vw;
    height: calc(100vh - 4rem);
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
    height: calc(100vh - 4rem);
`;

const content = styled.li`
    display: flex;
    height: calc(100vh - 4rem);
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