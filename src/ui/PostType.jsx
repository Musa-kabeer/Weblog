/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const PostType = styled.p`
  color: var(--color-brand-600);
  font-size: ${(props) => (props.type === 'sm' ? '10px' : '12px')};
  font-weight: 700;
  text-transform: uppercase;
`;

export default PostType;
