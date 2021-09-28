import styled, {css} from 'styled-components';

// const gifLi = styled.li`
//     ${props => {
//         if(props.show){
//             return css`
//                 display: block;
//             `
//         } else {
//             return css`
//                 display: none;
//             `
//         }
//     }}
// `;

const section = styled.section`
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const container = styled.ul`
    width: 30rem;
    height: 20rem;
    background: #fff;
`;

const gif = styled.li`
    width: 10rem;
    height: 5rem;
    /* background: url(${props=>props.gif}) no-repeat;   */
    background: url('/_next/static/media/test.541905ee183d0aad01846372526918b8.gif') no-repeat;
`;

export {
    section,
    container,
    gif,
};