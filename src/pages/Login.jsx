import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const Login = () => {
  // тут будет форма из чакри
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
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <h1>Страница логина</h1>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Login;
