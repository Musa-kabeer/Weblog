import PostsBox from '../../ui/PostsBox';
import Post from './Post';

function posts() {
  const posts = [
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      title: 'One of the biggest things on health',
      date: '9-7-2030',
      type: 'AI',
    },

    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1612066473428-fb6833a0d855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      title: 'How the world changes',
      date: '9-7-2030',
      type: 'AI',
    },

    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1678995632928-298d05d41671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'How the world changes',
      date: '9-7-2030',
      type: 'AI',
    },

    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1686191128680-caa7558da57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'How the world changes',
      date: '9-7-2030',
      type: 'AI',
    },

    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'How the world changes',
      date: '9-7-2030',
      type: 'AI',
    },

    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1633311905139-7b6088a69e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'How the world changes',
      date: '9-7-2030',
      type: 'AI',
    },

    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non saepe repellat quasi nobis soluta rerum earum voluptatibus.',
      image:
        'https://images.unsplash.com/photo-1686191128601-8ad912eee734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'How the world changes',
      date: '9-7-2030',
      type: 'AI',
    },
  ];

  return (
    <PostsBox>
      {posts.map((post) => (
        <Post key={post.content} post={post} />
      ))}
    </PostsBox>
  );
}

export default posts;
