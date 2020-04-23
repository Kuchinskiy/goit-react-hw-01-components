import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({
  user = { name: 'No name', stats: { followers: 0, views: 0, likes: 0 } },
}) => {
  return (
    <section className="profile-section">
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={user.avatar} alt="user avatar" className={styles.avatar} />
          <p className={styles.name}>{user.name}</p>
          <p className={styles.tag}>{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>
              {user.stats.followers.toLocaleString()}
            </span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>
              {user.stats.views.toLocaleString()}
            </span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>
              {user.stats.likes.toLocaleString()}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
