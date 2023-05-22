import PropTypes from 'prop-types';
import {
  InputFilter,
  FilterWrapper,
  ButtonFilter,
  Cross,
} from './Filter.styled';

const Filter = ({ value, onFilterChange, onFilterReset }) => {
  return (
    <FilterWrapper>
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
        placeholder="Search contact's name"
      />
      <ButtonFilter type="button" onClick={onFilterReset}>
        <Cross></Cross>
      </ButtonFilter>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
};

export default Filter;
