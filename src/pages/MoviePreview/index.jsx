import { Container, Content, Profile } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { CiClock2 } from "react-icons/ci";
import { StarRating } from '../../components/StarRating';
import { Tag } from '../../components/Tag';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function MoviePreview() {

    const [data, setData] = useState(null);

    const params = useParams();

    const navigate = useNavigate();

    let formattedDateTime = '';
    if (data && data.created_at) {
        const [date, time] = data.created_at.split(' ');
        formattedDateTime = `${date} at ${time}`;
    }

    async function fetchMovie() {
        try {
            const response = await api.get(`/movie_notes/${params.id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    }

    async function handleRemove() {
        const confrim = window.confirm("Do you want remove this note?")

        if (confrim) {
            await api.delete(`/movie_notes/${params.id}`);
            navigate("/")
        }
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <Container>
            <Header />
            {
                data &&
                <main>
                    <Content>
                        <a href='/'>
                            <ButtonText
                                title="Back"
                                icon={FiArrowLeft}
                            />
                        </a>
                        <div className=' HeaderMovie'>
                            <h1>{data.title}</h1>
                            <StarRating rating={data.rating} size="20px" />
                        </div>
                        <Profile>
                            <img src={data.user_avatar} alt={data.user_avatar} />
                            <a>{`By ${data.user_name}`}</a>
                            <CiClock2 />
                            <p>{formattedDateTime}</p>
                        </Profile>
                        {
                            data.movie_tags &&
                            data.movie_tags.map(tag => (
                                <Tag
                                    key={String(tag.id)}
                                    title={tag.name}
                                />
                            ))
                        }
                        <p>
                            {data.description}
                        </p>
                        <Button className="deleteButton"
                            title="Delete movie"
                            onClick={handleRemove} />
                    </Content>
                </main>
            }
        </Container>
    )
}     
