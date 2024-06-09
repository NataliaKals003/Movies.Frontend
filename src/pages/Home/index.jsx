import { Container, MoviesHeader, Content, Search } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MovieSection } from '../../components/MovieSection';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
        const response = await api.get(`/movie_notes?title=${search}`);
        setMovies(response.data)
    };

    useEffect(() => {
        fetchMovies();
    }, [search]);

    return (
        <Container>
            <Header />
            <MoviesHeader>
                <div className='wrap-header'>
                    <h1>My Movies</h1>
                    <Link to="/create-movie">
                        <Button style={{ width: '207px', height: '48px' }}
                            title="Add movie"
                            icon={FiPlus} />
                    </Link>
                </div>
                <Search>
                    <Input
                        placeholder="Serach by title"
                        onChange={(e) => setSearch(e.target.value)} />
                </Search>
            </MoviesHeader>
            <Content>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Link key={movie.id} to={`/movie-preview/${movie.id}`}>
                            <MovieSection movie={movie}
                            />
                        </Link>
                    ))
                ) : (
                    <span>No results</span>
                )}
            </Content>
        </Container>
    );
} 