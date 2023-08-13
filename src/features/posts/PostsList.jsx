/* eslint-disable react/prop-types */
import { usePosts } from './usePosts';
import PostList from './PostList';
import PostsBox from '../../ui/PostsBox';
import Spinner from '../../ui/Spinner';

function Posts() {
  const { isLoading, posts } = usePosts();

  if (isLoading) return <Spinner />;

  return (
    <PostsBox>
      {posts.map((post) => (
        <PostList key={post.id} post={post} />
      ))}
    </PostsBox>
  );
}

export default Posts;
