/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const PostParagraph = styled.p`
  margin: 2px 0;
  font-size: ${(props) => (props.type === 'lg' ? '17px' : '14px')};
  font-weight: 500;
  line-height: 32px;
`;

export default PostParagraph;
