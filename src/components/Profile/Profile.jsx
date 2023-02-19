import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Username,
  ListStats,
  ValueStats,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} width={200} alt="User avatar" />
        <Username>{username}</Username>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <ListStats>
        <li>
          <span>Followers: </span>
          <ValueStats>{stats.followers}</ValueStats>
        </li>
        <li>
          <span>Views: </span>
          <ValueStats>{stats.views}</ValueStats>
        </li>
        <li>
          <span>Likes: </span>
          <ValueStats>{stats.likes}</ValueStats>
        </li>
      </ListStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
