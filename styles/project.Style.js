import styled, {css} from 'styled-components';

const gifLi = styled.li`
    ${props => {
        if(props.show){
            return css`
                display: block;
            `
        } else {
            return css`
                display: none;
            `
        }
    }}
`;

const gif = styled.div`
    width: 30rem;
    height: 25rem;
    /* background: url(${props=>props.gif}) no-repeat;   */
    background: url("/_next/static/media/test.541905ee183d0aad01846372526918b8.gif") no-repeat;
`;

export {
    gifLi,
    gif,
};