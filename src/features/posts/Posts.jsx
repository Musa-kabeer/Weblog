/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import PostsBox from '../../ui/PostsBox';
import Post from './Post';
import { usePosts } from './usePosts';

const StyledLoading = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

function Posts() {
  const { isLoading, posts } = usePosts();

  console.log(posts);

  if (isLoading) return <StyledLoading>Loading...</StyledLoading>;

  return (
    <PostsBox>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsBox>
  );
}

export default Posts;
