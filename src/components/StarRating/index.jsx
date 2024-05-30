import { StarsContainer, StyledStar, EmptyStar } from './styles';

export const StarRating = ({ rating, size }) => {
    const clampedRating = Math.max(0, Math.min(Math.round(rating), 5));

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