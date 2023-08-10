/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledHeader = styled.h3`
  font-size: 17px;
  font-weight: 800;
  /* line-height: 25px; */
  font-size: ${(props) => (props.type === 'lg' ? '40px' : '20px')};
`;

function PostHeader({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default PostHeader;
