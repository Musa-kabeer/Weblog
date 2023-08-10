/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 2px 0;
`;

function PostParagraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default PostParagraph;
