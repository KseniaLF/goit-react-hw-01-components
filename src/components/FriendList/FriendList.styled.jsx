import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  margin-bottom: 30px;
  li {
    width: 300px;
    display: flex;
    background-color: rgb(243, 246, 249);
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(41, 114, 203, 0.773);
    img {
      margin-right: 10px;
    }
    p {
      font-weight: 500;
    }
  }
  li:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Chip = styled.span`
  display: block;
  margin-right: 10px;

  border-radius: 50%;
  width: 20px;
  height: 20px;

  background-color: ${prop => {
    return prop.bool ? 'green' : 'red';
  }};
`;
