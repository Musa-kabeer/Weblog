import { styled } from 'styled-components';

function PostsBox({ children }) {
  const StyledPostsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 2rem;
    gap: 10px;

    @media screen and (max-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  `;

  return <StyledPostsBox>{children}</StyledPostsBox>;
}

export default PostsBox;
