import { StarsContainer, StyledStar, EmptyStar } from './styles';

export const StarRating = ({ rating, size }) => {

    const numberRating = Number(rating);

    const clampedRating = isNaN(numberRating) ? 0 : Math.max(0, Math.min(Math.round(numberRating), 5));

    return (
        <StarsContainer>
            {[...Array(clampedRating)].map((_, index) => (
                <StyledStar key={index} size={size} />
            ))}

            {[...Array(5 - clampedRating)].map((_, index) => (
                <EmptyStar key={index + clampedRating} size={size} />
            ))}
        </StarsContainer>
    );
};