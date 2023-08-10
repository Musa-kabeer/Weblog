import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 769px) {
    gap: 15px;
  }

  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-grey-200);

  @media screen and (max-width: 769px) {
    width: 35px;
    height: 35px;
    border: 1px solid var(--color-grey-200);
  }

  @media screen and (max-width: 425px) {
    width: 30px;
    height: 30px;
    border: none;
    background: var(--color-brand-700);
  }
`;

const SpanedLink = styled.span`
  font-size: 15px;

  @media screen and (max-width: 769px) {
    font-size: 11px;
  }

  @media screen and (max-width: 425px) {
    font-size: 9px;
  }
`;

function UserAccess() {
  return (
    <StyledUser>
      <SpanedLink>
        <Link to="post/create">Create Post</Link>
      </SpanedLink>
      <ProfileImage src="/public/user.png" alt="User" />
    </StyledUser>
  );
}

export default UserAccess;
