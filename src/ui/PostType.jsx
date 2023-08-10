/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledPostType = styled.span`
  color: var(--color-brand-600);
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
`;

function PostType({ children }) {
  return <StyledPostType>{children}</StyledPostType>;
}

export default PostType;
