import styled, {css} from 'styled-components';

const nav = styled.nav`
    height: 4rem;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    @media screen and (max-width: 920px) {
        border-bottom: 1px solid #e3e3e3;
    }
`;

const ul = styled.ul`
    position: relative;
    width: 100vw;
    /* width: auto; */
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background: #fff; */
    z-index: 100;

    /* clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); */
    /* background: rgb(225,177,177);
    background: linear-gradient(135deg, rgba(225,177,177,1) 0%, rgba(47,72,88,1) 100%); */
    /* background: #E2B646; */
    li {
        font-weight: bold;
        margin: 0 0.5rem;
        width: 5rem;
        text-align: center;
    }   
    li:nth-child(3){
        font-size: 2rem;
        width: 6.5rem;
    }
    li:nth-child(6){
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        transform: translateY(0.7rem);
        a {
            margin: 0 0.3rem;
            transition: color 200ms ease-in-out;
            color: #2F4858;
        }
        a:hover {
            color: #E2B646;
        }
    }
    li:nth-child(7){
        p {
            background: #fff;
            span {
                background: rgb(69,104,220);
                background: linear-gradient(90deg, rgba(69,104,220,1) 0%, rgba(176,106,179,1) 100%);
                /* background: rgb(47,72,88);
                background: linear-gradient(90deg, rgba(47,72,88,1) 0%, rgba(176,106,179,1) 100%); */
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
    @media screen and (min-width: 701px) {
        li:nth-child(7) {
            display: none;
        }
    }
    @media screen and (max-width: 700px) {
        li:nth-child(1),li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5),li:nth-child(6){
            display: none;
        }
        li:nth-child(7){
            width: calc(100vw - 5rem);
            display: block;
            z-index: 100;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            padding: 1rem 0;
            p {
                font-size: 1.2rem;
            }
        }
        li:nth-child(7):hover{
            cursor: pointer;
        }
    }
    @media screen and (max-width: 300px) {
        li:nth-child(7){
            justify-content: center;
            p {
                display: none;
            }
        }
    }
`;

const toggle = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e3e3e3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    z-index: 50;

    transition: all 500ms ease-in-out;

    li {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0.5rem;
        display: flex;
        flex-direction: row;
    }
    li:nth-child(1) {
        margin-top: 1.2rem;
    }
    li:nth-child(6) {
        a {
            margin: 0 0.5rem;
            font-size: 2rem;
            color: #2F4858;
        }
        a:hover {
            color: #E2B646;
        }
    }

    ${(props) => {
        if(props.toggle) {
            return css`
                height: 22rem;
                transform: translateY(0);
                @media screen and (min-width: 701px) {
                    height: 0;
                    transform: translateY(-22rem);
                }
            `;
        } else {
            return css`
                height: 0;
                transform: translateY(-22rem);
            `;
        }
    }}
`;

export {
    nav,
    ul,
    toggle
};