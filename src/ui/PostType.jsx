/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledPostType = styled.p`
  color: var(--color-brand-600);
  font-size: 15px;
  font-weight: 700;
  padding: 3px 0;
`;

function PostType({ children }) {
  return <StyledPostType>{children}</StyledPostType>;
}

export default PostType;
