import styled, { css } from 'styled-components';

const answer = styled.div`
    ${props => {
        if(props.toggle){
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

export {
    answer,
}