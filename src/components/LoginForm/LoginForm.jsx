import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
// import { StyledForm, StyledLabel } from './LoginForm.styled';
import StyledForm from 'components/ContactForm/ContactForm.styled';
import { StyledLabel } from 'components/LoginForm/LoginForm.styled';
import StyledButton from 'components/Button.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </StyledLabel>

      <StyledLabel>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </StyledLabel>

      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  );
};
