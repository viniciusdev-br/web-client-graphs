import logoImg from '../../assets/logo-ufpa-white.svg';
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo da Universidade Federal do Pará" />

                <ul>
                    <li><a href="#">Algoritimos</a></li>
                    <li><a href="#">Tecnologias</a></li>
                    <li><a href="#">Alunos</a></li>
                </ul>
            </Content>
        </Container>
    )
}