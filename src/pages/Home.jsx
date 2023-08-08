import { styled } from 'styled-components';
import PostPreview from '../ui/PostPreview';
import Posts from '../features/posts/Posts';

function Home() {
  const StyledHome = styled.div`
    padding: 0 2rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    color: var(--color-gray-900);
  `;

  return (
    <StyledHome>
      <PostPreview />

      <Posts />
    </StyledHome>
  );
}

export default Home;
