import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { selectAuth } from 'redux/auth/selectors';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  name: {
    fontWeight: '700',
    marginRight: '12',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { user } = useAuth();
  const { user } = useSelector(selectAuth);
  // const name = useSelector(selectUserName);

  return (
    <div style={styles.wrapper}>
      <p style={styles.name}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

// добавить аватар
