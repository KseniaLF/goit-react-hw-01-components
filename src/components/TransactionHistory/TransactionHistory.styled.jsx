import styled from 'styled-components';

export const Table = styled.table`
  background-color: rgb(243, 246, 249);
  box-shadow: 0px 0px 10px rgba(41, 114, 203, 0.773);
  border-collapse: collapse;
  th,
  td {
    padding: 20px 40px;
    text-align: left;
    border: 1px solid;
    text-transform: capitalize;
  }

  thead {
    background-color: rgb(94, 153, 225);
  }
`;
export const HistoryItem = styled.tr`
  :nth-child(2n + 2) {
    background-color: rgb(167, 202, 244);
  }
`;
