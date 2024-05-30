import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';

export function SignIn() {
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
                />
                <Input
                    placeholder="Password"
                    type="text"
                    icon={FiLock}
                />

                <Button title=" Sign in" />

                <a href="/register">
                    Create acount
                </a>
            </Form>
            <Background />
        </Container>
    );
}

