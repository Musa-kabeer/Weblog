/* eslint-disable react/prop-types */
import { css, styled } from 'styled-components';

const StyledParagraph = styled.p`
  ${(props) =>
    props.type === 'lg'
      ? css`
          font-size: 19px;
        `
      : css`
          font-size: 15px;
        `}

  margin: 2px 0;
`;

function PostParagraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default PostParagraph;
