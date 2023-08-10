/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import PostsBox from '../../ui/PostsBox';
import PostList from './PostList';
import { usePosts } from './usePosts';

const StyledLoading = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

function Posts() {
  const { isLoading, posts } = usePosts();

  if (isLoading) return <StyledLoading>Loading...</StyledLoading>;

  return (
    <PostsBox>
      {posts.map((post) => (
        <PostList key={post.id} post={post} />
      ))}
    </PostsBox>
  );
}

export default Posts;
