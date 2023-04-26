import { lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

const Home = lazy(() => import('../pages/Home.jsx'));
const Register = lazy(() => import('../pages/Register.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const Contacts = lazy(() => import('../pages/Contacts.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);
  useEffect(() => {
    dispatch(refreshUser());
    console.log('refreshed :>> ');
  }, [dispatch]);

  return isRefreshing ? (
    <b>Fetching user data...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
