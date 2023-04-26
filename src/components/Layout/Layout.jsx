import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledSection } from './Layout.styled';

export const Layout = () => {
  return (
    <StyledContainer>
      <AppBar />
      <main>
        <StyledSection>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </StyledSection>
      </main>
      <footer></footer>
    </StyledContainer>
  );
};
