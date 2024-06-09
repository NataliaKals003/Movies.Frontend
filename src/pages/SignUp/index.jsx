import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSingUp() {
        if (!name || !email || !password) {
            return alert("Fill in all fields");
        }
        api.post("/users", { name, email, password })
            .then(() => {
                alert("User registered successfully");
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("It was not possible to register the user")
                }
            });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to keep track of everything you watch</p>
                <h2>SignUp</h2>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}

                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}

                />

                <Button
                    title=" Register"
                    onClick={handleSingUp}
                />

                <a href="/">
                    <ButtonText className="button-text"
                        icon={FiArrowLeft}
                        title="Back to LogIn" />
                </a>
            </Form>
            <Background />
        </Container>
    );
}