import styled, {css} from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    background: #E2B646;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
        width: 70rem;
        height: 30rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        li {
            background: #fff;
            width: 7rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 1rem;
            div {
                margin: 1rem 0;
            }
        }
    }
`;

export {
    section,
}