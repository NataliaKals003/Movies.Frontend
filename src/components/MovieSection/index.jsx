import { Container } from './styles';
import { StarRating } from '../StarRating';

export function MovieSection({ title, rating, description, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            <StarRating rating={rating} />
            <p>{description}</p>
            {children}
        </Container>
    )
}

