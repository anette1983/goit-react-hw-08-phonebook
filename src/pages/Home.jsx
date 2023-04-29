import { useNavigate } from 'react-router-dom';
import {
  ColoredButton,
  StyledButtonDiv,
  StyledContainer,
  StyledHeader,
} from './Home.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

const Home = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledHeader>Phonebook</StyledHeader>
      {!isLoggedIn && (
        <StyledButtonDiv>
          <ColoredButton
            variant="contained"
            size="large"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log In
          </ColoredButton>
          <ColoredButton
            variant="contained"
            size="large"
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </ColoredButton>
        </StyledButtonDiv>
      )}
    </StyledContainer>
  );
};

export default Home;
