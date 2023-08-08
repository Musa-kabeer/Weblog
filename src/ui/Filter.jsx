/* eslint-disable react/prop-types */

import { styled } from 'styled-components';

function Filter({ filterValues }) {
  const StyledSelect = styled.select`
    @media screen and (max-width: 769px) {
      width: 100px;
    }

    @media screen and (max-width: 425px) {
      width: 80px;
    }
  `;

  return (
    <StyledSelect value="all">
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
