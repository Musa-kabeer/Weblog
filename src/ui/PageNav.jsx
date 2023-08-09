import { styled } from 'styled-components';
import UserAccess from './UserAccess';

const StyledNavbar = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 8rem;
  background: var(--color-blue-700);

  @media screen and (max-width: 1024px) {
    padding: 0 2.5rem;
    height: 7vh;
  }

  @media screen and (max-width: 769px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0 1rem;

    height: 8vh;
  }
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;

  @media screen and (max-width: 769px) {
    font-size: 17px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

function PageNav() {
  return (
    <StyledNavbar>
      <H2>WebLog</H2>

      <UserAccess />
    </StyledNavbar>
  );
}

export default PageNav;
