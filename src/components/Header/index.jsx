import { Container, Brand, Profile } from "./styles";
import { ButtonText } from "../ButtonText";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';

export function Header() {
    const { signOut, user } = useAuth();

    const navigateion = useNavigate();

    function handleSignOut() {
        navigateion("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : "https://storage.googleapis.com/golden-wind/explorer/description-assets/nivel-10/stage-10/avatar_placeholder.svg";

    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link>
                    <Link to="/">
                        <ButtonText
                            title="leave"
                            onClick={handleSignOut} />
                    </Link>
                </div>
                <a href="/profile">
                    <img src={avatarUrl} alt={user.name} />
                </a>

            </Profile>
        </Container>
    )
}