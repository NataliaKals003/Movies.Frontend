import { Container, Brand, Search, Profile } from "./styles";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            <Search>
                <Input placeholder="Serach by title" />
            </Search>
            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>Natália Kals</strong>
                    </Link>
                    <Link to="/">
                        <ButtonText title="leave" />
                    </Link>
                </div>
                <a href="/profile">
                    <img src="https://github.com/nataliakals003.png" alt="Profile picture" />
                </a>

            </Profile>
        </Container>
    )
}