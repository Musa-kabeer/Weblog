/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledSelect = styled.select`
  @media screen and (max-width: 769px) {
    width: 100px;
  }

  @media screen and (max-width: 425px) {
    width: 80px;
  }
`;

function Filter({ filterValues }) {
  return (
    <StyledSelect>
      {filterValues.map((filter) => {
        return (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        );
      })}
    </StyledSelect>
  );
}

export default Filter;
