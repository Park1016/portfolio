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

const detail = styled.div`
    ${props => {
        if(props.qs){
            return css`
                width: 100%;
                height: 100%;
                background: rgb(0, 0, 0, 0.5);
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            `
        } else {
            return css`
                /* display: none; */
            `
        }
    }}
`;

const content = styled.div`
    ${props => {
        if(props.qs){
            return css`
                width: 30rem;
                height: 20rem;
                background: #fff;
            `
        } else {
            return css`
                /* display: none; */
            `
        }
    }}
`;

export {
    detail,
    content,
    gifLi,
    gif,
};