import styled, {css} from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    /* background: #E2B646; */
    background: rgb(0, 166, 190, 0.7);
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
        /* border: 1px solid black; */
        transform: translateX(-3.5rem);
        li {
            background: #fff;
            border-radius: 20px;
            width: 7rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 0 1rem;
            box-shadow: 3px 3px 5px rgb(0, 0, 0, 0.5);
            div {
                margin-top: 1rem;
            }
            p {
                margin-bottom: 1rem;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;

const title = styled.p`
    color: #fff;
    font-size: 3rem;
    width: 7rem;
    height: 3.8rem;
    text-align: center;
    text-shadow: 3px 3px 5px black;
    /* transform: translate(34.8rem, -18rem); */
    transform: translate(2rem, -14rem);
    border-bottom: 8px solid #FFC831;
`;

const top = styled.span`
    background: #FFC831;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 3px black;
    width: 100%;
    height: 3rem;
    font-size: 1.2rem;
`;

export {
    section,
    title,
    top
}