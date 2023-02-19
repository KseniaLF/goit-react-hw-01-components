import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
  /* padding: 20px; */
  box-shadow: 0px 0px 10px rgba(41, 114, 203, 0.773);
`;

export const Title = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
  background-color: rgb(243, 246, 249);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;

    background-color: rgb(167, 202, 244);
  }
  li:nth-child(2n + 1) {
    background-color: rgb(94, 153, 225);
  }

  span {
    font-weight: 700;
    margin-top: 5px;
  }
`;
