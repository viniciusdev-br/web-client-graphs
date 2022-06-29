import styled from "styled-components";

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
