import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background: #4c00bf;
  padding: 0.5rem;
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderNavbarList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;

  color: #ffffff;

  li {
    font-weight: 500;
  }
`;
