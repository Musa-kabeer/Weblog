import { styled } from 'styled-components';
import Filter from './Filter';

const StyledPostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-grey-900);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 769px) {
    font-size: 15px;
    font-weight: 600;
  }

  @media screen and (max-width: 425px) {
    font-size: 12px;
    font-weight: 600;
  }
`;

function PostPreview() {
  return (
    <StyledPostsHeader>
      <Title>All Posts</Title>

      <Filter
        // filter="posts"
        filterValues={[
          { label: 'All', value: 'all' },
          { label: 'Filter by AI', value: 'ai' },
          { label: 'Filter by Development', value: 'development' },
        ]}
      />
    </StyledPostsHeader>
  );
}

export default PostPreview;
