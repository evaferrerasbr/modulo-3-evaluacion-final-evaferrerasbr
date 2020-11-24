import PropTypes from 'prop-types';
import FilterName from './FilterName';
import FilterGender from './FilterGender';
import FilterStatus from './FilterStatus';
import FilterAlphabet from './FilterAlphabet';
import Reset from '../Extras/Reset';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterName
        handleFilters={props.handleFilters}
        filterName={props.filterName}
      />
      <FilterGender
        handleFilters={props.handleFilters}
        filterGender={props.filterGender}
      />
      <FilterStatus
        handleFilters={props.handleFilters}
        filterStatus={props.filterStatus}
      />
      <FilterAlphabet
        handleFilters={props.handleFilters}
        isOrderedByName={props.isOrderedByName}
      />
      <Reset handleReset={props.handleReset} />
    </form>
  );
}

Filters.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterGender: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  isOrderedByName: PropTypes.bool.isRequired,
};

export default Filters;