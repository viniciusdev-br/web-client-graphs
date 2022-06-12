import styled from "styled-components";

export const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  background-color: white;
  border: transparent;
  box-shadow: 0 0 0 1px hsl(0, 0%, 80%);

  transition: all 200ms ease;
  outline: 0;

  &:focus {
    box-shadow: 0 0 0 2px #2684ff;
  }
`;
