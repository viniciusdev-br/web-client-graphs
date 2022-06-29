import { Flex } from "@chakra-ui/react";
import LogoImg from "../../../assets/logo-ufpa-white.svg";
import { Container } from "../container";
import { HeaderNavbar, HeaderNavbarList } from "./styles";

export function Header() {
  return (
    <Flex w="full" p="4" bg="purple.700">
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
    </Flex>
  );
}
