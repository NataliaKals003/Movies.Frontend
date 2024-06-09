import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to keep track of everything you watch</p>
                <h2>LogIn</h2>
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
                    title="Sign in"
                    onClick={handleSignIn} />

                <a href="/register">
                    Create acount
                </a>
            </Form>
            <Background />
        </Container>
    );
}

