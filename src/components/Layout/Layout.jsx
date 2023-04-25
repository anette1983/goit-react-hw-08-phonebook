import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Log in</NavLink>
            </div>
          )}
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
