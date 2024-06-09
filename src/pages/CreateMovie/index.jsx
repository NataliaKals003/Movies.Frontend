import { Container, Form, MoviesHeader, StyledButtonText } from './styles';
import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function CreateMovie() {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        if (deleted) {
            const removeTag = window.confirm(`Do you want to delete the tag ${deleted}?`);
            if (removeTag) {
                setTags(prevState => prevState.filter(tag => tag !== deleted));
            }
        }
    }

    async function handleCreateMovie() {

        if (!title || !rating || !description) {
            return alert("Fill in all fields");
        }

        if (isNaN(parseFloat(rating))) {
            return alert("In the Rating field you must enter a number");
        }

        if (newTag && newTag.trim() !== "") {
            const userChoice = window.confirm(`You created a tag ${newTag} but didn't add it, do you want to add it?`);
            if (userChoice) {
                setTags(prevTags => [...prevTags, newTag]);
                setNewTag("");
                alert(`Tag ${newTag} added successfully!`);
            } else if (tags === "") {
                return;
            }
        }

        const finalTags = newTag ? [...tags, newTag] : tags;

        try {
            await api.post("/movie_notes", {
                title,
                rating,
                description,
                tags: finalTags
            });
            alert("Movie added successfully!");
            navigate("/");
        } catch (error) {
            alert("Failed to save the movie.");
        }
    }

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
                        <Input
                            placeholder="Title"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                            placeholder="Rating (from 0 to 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea
                        placeholder="descriptions"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Tags">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <TagItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <TagItem
                                isNew
                                value={newTag}
                                placeholder="New Tag"
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className='button'>
                        <Button
                            title="Save alterations"
                            onClick={handleCreateMovie}
                        />
                    </div>
                </Form>
            </main>
        </Container >
    )
} 