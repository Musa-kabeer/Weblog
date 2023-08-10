import { styled } from 'styled-components';
import PostPreview from '../ui/PostPreview';
import PostsList from '../features/posts/PostsList';

const StyledHome = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  color: var(--color-gray-900);
`;

function Home() {
  return (
    <StyledHome>
      <PostPreview />

      <PostsList />
    </StyledHome>
  );
}

export default Home;
