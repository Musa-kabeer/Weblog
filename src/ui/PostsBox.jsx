/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledPostsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;
  gap: 10px;

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

function PostsBox({ children }) {
  return <StyledPostsBox>{children}</StyledPostsBox>;
}

export default PostsBox;
