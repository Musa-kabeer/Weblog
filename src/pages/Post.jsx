import { styled } from 'styled-components';
import PostPage from '../features/posts/PostPage';

const StyledPost = styled.div`
  color: var(--color-grey-800);
  height: 100vh;
`;

function Post() {
  return (
    <StyledPost>
      <PostPage />
    </StyledPost>
  );
}

export default Post;
