import { Container } from './styles';
import { StarRating } from '../StarRating';
import { Tag } from '../../components/Tag';

export function MovieSection({ movie }) {

    return (
        <Container>
            <h2>{movie.title}</h2>
            <StarRating
                rating={movie.rating}
            />
            <p>{movie.description}</p>

            {movie.tags ?
                movie.tags.map((tag, index) => (
                    <Tag
                        key={index}
                        title={tag}
                    />
                ))
                : <span>No results</span>
            }
        </Container>
    )
}

