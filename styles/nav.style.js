import styled, {css} from 'styled-components';

const nav = styled.nav`
    height: 4rem;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    /* border-bottom: 1px solid #E1B1B1; */
    ul {
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        li {
            font-weight: bold;
            margin: 0 1rem;
        }   
        li:nth-child(3){
            font-size: 2rem;
        }
    }
`;

export {
    nav,
};