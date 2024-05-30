import { Container } from './styles';

export function Section({ title, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            {children} {/* children é o conteudo que esta logo abaixo do title, links ou tags */}
        </Container>
    )
}
