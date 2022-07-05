import styled from "styled-components";

export const Pipeline = styled.div`
  animation: strobe 500ms linear infinite;
  height: 15px;
  width: 2px;
  background-color: #fff;

  @keyframes strobe {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
