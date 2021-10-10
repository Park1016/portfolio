import styled, {css} from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: calc(100vh - 4rem);
    background: lightcoral;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* scroll-snap-align: center; */
`;

const div = styled.div`
    /* background: blue; */
    width: 80%;
    max-height: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar { 
        display: none;
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
    }
`;

const ul = styled.ul`
    width: 24.75rem;
    height: 13rem;
    background: black;
    margin: 0.5rem;
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

const None = styled.div`
    display: none;
`;

export {
    section,
    div,
    ul,
    detail,
    content,
    None,
};