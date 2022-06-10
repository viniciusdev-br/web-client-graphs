import { Container} from "./styles";

export function ButtonStart() {
    return (
        <Container>
            <button type="button" onClick={() => alert('Oi')}>Iniciar criação de grafos!</button>
        </Container>
    )
}