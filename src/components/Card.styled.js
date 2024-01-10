import styled from '@emotion/styled';

export const StyledCard = styled.div`
    background-color: cadetblue;
    padding: 5px;
    border-radius: 5px;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    border: solid 5px black;
    position: relative;
    transition: all 0.4s linear;
    transform-style: preserve-3d;
    margin: 5px, 5px, 20px, 5px;
    & > div {
        position: relative;
        backface-visibility: hidden;
    }
    ${props => {
        if (props.selected) {
            return `
                border-color: blue;
                transform: rotateY(180deg);
            `;
        }
        if (props.matched) {
            return `
                border-color: green;
                background-color: white;
                transform: rotateY(180deg);
            `;
        }
    }};
`;

export const StyledLabel = styled.div`
    text-align: center;
    font-weight: bold;
    padding: 5px;
`;

export const StyledFront = styled.div`
    transform: rotateY(180deg);
`;

export const StyledBack = styled.div`
    transform: rotateY(180deg);
    top: 25%;
    left: 35%;
`;