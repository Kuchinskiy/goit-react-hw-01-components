import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


const FriendList = ({ friends = [] }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <span
            className={`${styles.status} ${isOnline && styles.online}`}
          ></span>
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};



// *Вариант - 2

// const FriendList = ({ friends }) => {
//   return (
//     <ul className={styles.friendList}>
//       {friends.map(prop => (
//         <li key={prop.id} className={styles.item}>
//           <span
//             className={
//               prop.isOnline ? styles.statusOnline : styles.statusOffline
//             }
//           />
//           <img className={styles.avatar} src={prop.avatar} alt="" width="90" />
//           <p className={styles.name}>{prop.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
