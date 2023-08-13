import { styled } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border: none;
  font-size: 15px;
  width: 100px;
  height: 30px;
  color: var(--color-grey-300);
  background-color: var(--color-brand-600);
  border-radius: 3px;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export default Button;
