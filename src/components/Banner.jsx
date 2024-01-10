import { BannerWrapper, BannerButton} from "./Banner.styled";

const Banner = (endMessage, handleClick) => {
    return (
        <BannerWrapper>
            <div>{endMessage}</div>
            <BannerButton onClick={handleClick}>
                Play Again
            </BannerButton>
        </BannerWrapper>
    );
};

export default Banner;