import styles from './FriendsListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span
        className={[
          styles.status,
          isOnline ? styles.isOnline : styles.isOffline,
        ].join(' ')}
      ></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
