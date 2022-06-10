import { Container, ContainerQuestion, LeftFormContainer, OutputGraphs } from "./styles";

export function MainGrafos() {
    return (
        <Container>
            <LeftFormContainer>
                <div>
                    <ContainerQuestion>
                        <label htmlFor="arestaOrientacao">Grafo orientado:</label>
                        <select id="arestaOrientacao">
                            <option value="Sim"> - </option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </ContainerQuestion>                
                    <label htmlFor="arestaPeso">As arestas tem pesos?</label>
                    <select id="arestaPeso">
                        <option value="Sim">-</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>

                    <label htmlFor="NumVertices">Informe o número de vérties:</label>
                    <input type="number" name="NumVertices" id="NumVertices" />

                    <button type="button">Ok!</button>
                </div>

                <div>
                    <label htmlFor="origemVertice">Vértice de origem:</label>
                    <input type="text" name="origemVertice" id="origemVertice" />

                    <label htmlFor="destinoVertice">Vértice de destino:</label>
                    <input type="text" name="destinoVertice" id="destinoVertice" />

                    <label htmlFor="destinoVertice">Informe o peso desta conexão:</label>
                    <input type="text" name="destinoVertice" id="destinoVertice" placeholder="Digite o peso aqui..."/>
                </div>

            </LeftFormContainer>

            <div>
                    <p>Output</p>
                </div>
        </Container>
    )
}