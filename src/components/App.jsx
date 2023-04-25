import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { Login } from 'pages/Login';
// import { Register } from 'pages/Register';
// import Contacts from 'pages/Contacts';
// import Home from 'pages/Home';

const Home = lazy(() => import('../pages/Home.jsx'));
const Register = lazy(() => import('../pages/Register.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const Contacts = lazy(() => import('../pages/Contacts.jsx'));

const App = () => {
  return (
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

export default App;
