/* eslint-disable react/prop-types */
import { useState } from 'react';
import { 
    StyledCard, 
    StyledLabel,
    StyledFront,
    StyledBack,
} from './Card.styled';

import { CARD_STATUS, CARD_SIZE } from '../constants';

const Card = ({ data, handleClick, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { id, label, image, status } = data;
    const isSelected = status === CARD_STATUS.SELECTED;
    const isMatched = status === CARD_STATUS.MATCHED;

    const onCardClick = () => {
        if (status === CARD_STATUS.HIDDEN) {
            handleClick(index, id);
        }
    };

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    // const imgName = './StarTrek/' + image;
    // const imgUrl = new URL(imageName, import.meta.url).href
    // const imgUrl = new URL(imgName, import.meta.url).href

    return (
        <StyledCard
            height={CARD_SIZE.HEIGHT}
            width={CARD_SIZE.WIDTH} 
            selected={isSelected} 
            matched={isMatched} 
            onClick={onCardClick}>
            <StyledFront>
                <img src={image} alt="card" onLoad={handleImageLoad} />
                <StyledLabel>{label}</StyledLabel>
            </StyledFront>
            <StyledBack>{!isLoaded && "Loading"}</StyledBack>
        </StyledCard>
    );
};

export default Card;