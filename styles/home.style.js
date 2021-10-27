import styled, { css, keyframes } from 'styled-components';

const up = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3rem;
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
    bottom: 1rem;
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

const text = keyframes`
    0% {
        color: #fff;
    }
    65% {
        color: #fff;
    }
    85% {
        color: transparent;
    }
    95% {
        color: #fff;
    }
    100% {
        color: #fff;
    }
`;

const icon = keyframes`
    0% {
        color: rgb(255,255,255,0.8);
    }
    70% {
        color: rgb(255,255,255,0.8);
    }
    90% {
        color: transparent;
    }
    100% {
        color: rgb(255,255,255,0.8);
    }
`;

const alert = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    bottom: 1rem;
    left: calc(50vw - 2rem);
    z-index: 13;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0,0,0,0.1);
    p:nth-child(1) {
        font-size: 1rem;
        animation: ${text} 5000ms;
        animation-iteration-count: infinite;
        animation-direction: normal;
        transform: translateY(0.3rem);
    }
    p:nth-child(2) {
        animation: ${icon} 5000ms;
        animation-iteration-count: infinite;
        animation-direction: normal;
    }
    ${(props) => {
        if (props.page === 3) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: flex;
            `;
        }
    }}
`;



export {
    up,
    down,
    alert
}