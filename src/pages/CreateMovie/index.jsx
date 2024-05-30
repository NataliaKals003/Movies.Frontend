import { Container, Form, MoviesHeader, StyledButtonText } from './styles';
import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";

export function CreateMovie() {
    return (
        <Container>
            <Header />
            <main>
                <MoviesHeader>
                    <Link to="/">
                        <StyledButtonText
                            title="Back"
                            icon={FiArrowLeft} />
                    </Link>
                    <h1>New Movie</h1>
                </MoviesHeader>
                <Form>
                    <div className='input-wrap'>
                        <Input placeholder="Title" />
                        <Input placeholder="Rating (from 0 to 5)" />
                    </div>
                    <TextArea placeholder="Observations" />
                    <Section title="Tags">
                        <div className='tags'>
                            <TagItem value="React" />
                            <TagItem isNew placeholder="New Tag" />
                        </div>
                    </Section>
                    <div className='button'>
                        <Button title="Delete movie" />
                        <Button title="Save alterations" />
                    </div>
                </Form>
            </main>
        </Container >
    )
} 