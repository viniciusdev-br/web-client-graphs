import LogoImg from "../../../assets/logo-ufpa-white.svg";
import { Container } from "../container";
import { HeaderNavbar, HeaderNavbarList, StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderNavbar>
          <img src={LogoImg} />

          <HeaderNavbarList>
            <li>Algoritmos</li>
            <li>Tecnologias</li>
            <li>Alunos</li>
          </HeaderNavbarList>
        </HeaderNavbar>
      </Container>
    </StyledHeader>
  );
}
