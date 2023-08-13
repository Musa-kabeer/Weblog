/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 0.4fr 1fr 0.5fr;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-brand-500);
  text-transform: uppercase;
`;

const Error = styled.span`
  color: #9f0404;
  font-size: 13px;
`;

function Row({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      <Error>{error}</Error>
    </StyledFormRow>
  );
}

export default Row;
