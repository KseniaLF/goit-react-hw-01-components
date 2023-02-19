import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #fff;
  /* padding: 20px; */
  box-shadow: 0px 0px 10px rgba(41, 114, 203, 0.773);
  border-radius: 2%;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #747474;
  padding: 20px;

  p {
    margin: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: rgb(231, 236, 242);
  border: 6px solid rgb(231, 236, 242);
`;

export const Username = styled.p`
  color: #000000;
  font-size: 30px;
  font-weight: 500;
`;

export const ListStats = styled.ul`
  display: flex;

  li {
    border-top: 4px solid rgb(231, 236, 242);
    background-color: rgb(243, 246, 249);
    width: 100px;
    height: 100px;
    font-size: 17px;
    color: #747474;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  li:not(:last-child) {
    border-right: 4px solid rgb(231, 236, 242);
  }
`;

export const ValueStats = styled.span`
  color: #000;
  font-weight: 500;
`;
