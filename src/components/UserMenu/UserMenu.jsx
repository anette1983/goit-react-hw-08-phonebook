import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { selectAuth } from 'redux/auth/selectors';
import { StyledUserWrapper } from './UserMenu.styled';
import StyledButton from 'components/Button.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { user } = useAuth();
  const { user } = useSelector(selectAuth);
  // const name = useSelector(selectUserName);

  return (
    <StyledUserWrapper>
      <p>Welcome, {user.name}</p>
      <StyledButton type="button" onClick={() => dispatch(logout())}>
        Logout
      </StyledButton>
    </StyledUserWrapper>
  );
};

// добавить аватар
