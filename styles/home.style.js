import styled from 'styled-components';
import slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = styled(slider)`
    width : 100%;
    height : calc(100vh - 4rem);
    .slick-list {
        width : 100%;
        height : calc(100vh - 4rem);
    }
    .slick-track{
        width : 100%;
        height : calc(100vh - 4rem);
        display: flex;
        flex-direction: column;
    }
    .slick-slide {
        section {
            width : 100%;
            height : calc(100vh - 4rem);
        }
    }
`;

export {
    Slider,
}