/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const PostHeader = styled.h3`
  font-size: 17px;
  font-weight: 800;
  font-size: ${(props) => (props.type === 'lg' ? '22px' : '14px')};
`;

export default PostHeader;
