import styled, { css } from 'styled-components';

const up = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 4rem;
    /* left: calc(50vw - 1rem); */
    right: 1rem;
    z-index: 13;
    p {
        width: 4rem;
        padding: 0.2rem 0.5rem;
        background: rgb(0,0,0,0.5);
        color: #fff;
        border-radius: 10px;
        transform: translate(-4.5rem, 0.1rem);
    }
    ${(props) => {
        if (props.up === 0) {
            return css`
                background: rgb(255,255,255,0.9);
                :hover {
                    cursor: not-allowed;
                }
            `;
        } else {
            return css`
                background: transparent;
                :hover {
                    cursor: pointer;
                }
            `;
        }
    }}
`;

const down = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    bottom: 2rem;
    /* left: calc(50vw - 1rem); */
    right: 1rem;
    z-index: 13;
    p {
        width: 5rem;
        padding: 0.2rem 0.5rem;
        background: rgb(0,0,0,0.5);
        color: #fff;
        border-radius: 10px;
        transform: translate(-5.5rem, 0.1rem);
    }
    ${(props) => {
        if (props.down === 3) {
            return css`
                background: rgb(255,255,255,0.9);
                :hover {
                    cursor: not-allowed;
                }
            `;
        } else {
            return css`
                background: transparent;
                :hover {
                    cursor: pointer;
                }
            `;
        }
    }}
`;

export {
    up,
    down,
}