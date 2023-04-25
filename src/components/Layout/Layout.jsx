import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import { StyledContainer, StyledHeader, StyledNavLink } from './Layout.styled';

// const StyledNavLink = styled(NavLink)`
//   color: #212121;
//   font-size: 22px;
//   display: block;
//   padding-top: 16px;
//   padding-bottom: 16px;
//   &.active {
//     color: red;
//   }
// `;

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log in</NavLink>
          </div>
        </nav>
      </header>
      <div>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
