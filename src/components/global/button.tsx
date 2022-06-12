import styled from "styled-components";

export const Button = styled.button`
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;

  cursor: pointer;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: transparent;
  background-color: #4c00bf;
  color: white;

  transition: all 300ms ease;

  &:hover {
    background-color: #5e00eb;
  }

  &:active {
    background-color: #3c00a5;
  }
`;
