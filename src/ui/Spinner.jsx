import { styled } from 'styled-components';

const StyledSpinner = styled.p`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  margin-top: 3rem;
`;

function Spinner() {
  return <StyledSpinner>Loading Posts ...</StyledSpinner>;
}

export default Spinner;
