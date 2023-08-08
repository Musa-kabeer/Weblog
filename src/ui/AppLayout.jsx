import { Outlet } from 'react-router-dom';
import PageNav from './PageNav';
import { styled } from 'styled-components';

function AppLayout() {
  const StyledLayout = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-grey-100);
  `;

  const Main = styled.main`
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  `;

  return (
    <StyledLayout>
      <PageNav />

      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
