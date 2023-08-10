/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledHeader = styled.h3`
  font-size: 17px;
  font-weight: 800;
  line-height: 19px;
`;

function PostHeader({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default PostHeader;
