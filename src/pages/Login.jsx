import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { StyledContainer } from './Home.styled';

const Login = () => {
  // тут будет форма из чакри

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <StyledContainer><LoginForm /></StyledContainer>
      </div>
    </HelmetProvider>
  );
};

export default Login;
