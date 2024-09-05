import SearchCars from './SearchCars';
import CarsTable from './CarsTable';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function FilterCars({ cars }) {
  const [filterText, setFilterText] = useState('');
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      <SearchCars
        filterText={filterText}
        inStock={inStock}
        handleFilterText={setFilterText}
        handleStockChange={setInStock}
      />
      <CarsTable
        cars={cars}
        filterText={filterText}
        inStock={inStock}
      />
    </div>
  );
}

FilterCars.propTypes = {
  cars: PropTypes.array,
};
