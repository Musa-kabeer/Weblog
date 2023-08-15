/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const paramGetter = searchParams.get('posts') || 'all';

  function handlFilter(e) {
    searchParams.set('posts', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSelect value={paramGetter} onChange={handlFilter}>
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
