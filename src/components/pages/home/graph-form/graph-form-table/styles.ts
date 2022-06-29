import styled from "styled-components";

export const GraphFormTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`;

export const GraphTable = styled.table`
  width: 100%;

  thead {
    th {
      font-size: 0.875rem;
      padding: 1rem 2rem;
      text-align: start;
    }
  }

  tbody {
    width: 100%;

    tr {
      width: 100%;

      td {
        padding: 1rem 2rem;
      }
    }
  }
`;
