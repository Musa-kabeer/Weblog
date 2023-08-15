import { styled } from 'styled-components';

const StyledEmpty = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

function Empty() {
  return <StyledEmpty>No Post found!</StyledEmpty>;
}

export default Empty;
