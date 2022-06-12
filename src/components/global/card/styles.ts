import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export const CardContainerHeader = styled.div<{
  isExpanded: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

  h3 {
    font-weight: 600;
    user-select: none;
  }

  svg {
    transition: all 300ms ease;
    ${({ isExpanded }) => (isExpanded ? "transform: rotate(90deg);" : "")}
  }
`;

export const CardContainerContent = styled.div<{
  isExpanded: boolean;
}>`
  transition: height 300ms ease;
  height: ${({ isExpanded }) => isExpanded && "0"};
  overflow: hidden;
  padding: 0 2rem ${({ isExpanded }) => !isExpanded && "2rem"};
`;
