import PropTypes from 'prop-types';
import { FriendListContainer, Chip } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <Chip bool={isOnline}></Chip>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </li>
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
