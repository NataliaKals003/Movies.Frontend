import { useState } from 'react';
import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        };

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile });

    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

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
                    <img src={avatar} alt="User photo" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Save" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}