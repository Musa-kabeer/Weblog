/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import { usePosts } from './usePosts';
import PostList from './PostList';
import PostsBox from '../../ui/PostsBox';
import Spinner from '../../ui/Spinner';
import Empty from '../../ui/Empty';

function Posts() {
  const [searchParams] = useSearchParams();
  const { isLoading, posts } = usePosts();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('posts') || 'all';
  console.log(filterValue);

  let filteredPosts;

  // 1) FILTER
  if (filterValue === 'all') filteredPosts = posts;

  if (filterValue === 'ai')
    filteredPosts = posts.filter((post) => post.type === 'ai');

  if (filterValue === 'development')
    filteredPosts = posts.filter(
      (post) => post.type === 'development'
    );
  console.log(filteredPosts);

  if (filteredPosts.length === 0) return <Empty />;

  return (
    <PostsBox>
      {filteredPosts.map((post) => (
        <PostList key={post.id} post={post} />
      ))}
    </PostsBox>
  );
}

export default Posts;
