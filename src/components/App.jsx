// import { lazy } from 'react';
// чи потрібен тут лейзі?
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
// import Contacts from 'pages/Contacts';
import Home from 'pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="contacts" element={<Contacts />} /> */}
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};

export default App;
