
import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText
                        title="Back"
                        icon={FiArrowLeft} />
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/nataliakals003.png" alt="User photo" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
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
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save" />
            </Form>
        </Container>
    )
}