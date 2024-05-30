import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
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
                />
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

                <Button title=" Register" />

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