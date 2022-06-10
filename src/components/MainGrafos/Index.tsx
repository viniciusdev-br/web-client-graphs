import { Container, LeftFormContainer, OutputGraphs } from "./styles";

export function MainGrafos() {
    return (
        <Container>
            <LeftFormContainer>
                <div>
                    <p>Grafo orientado</p>
                    <select >
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>

                <div>
                    <p>Grafo orientado</p>
                    <select >
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>

            </LeftFormContainer>

            <div>
                    <p>Output</p>
                </div>
        </Container>
    )
}