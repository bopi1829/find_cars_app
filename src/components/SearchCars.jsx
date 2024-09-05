import PropTypes from 'prop-types';

export default function SearchCars({
  filterText,
  inStock,
  handleFilterText,
  handleStockChange,
}) {
  return (
    <div>
      <input
        placeholder="Rechercher..."
        type="text"
        value={filterText}
        onChange={(e) => handleFilterText(e.target.value)}
      />{' '}
      <input
        type="checkbox"
        checked={inStock}
        onChange={(e) => handleStockChange(e.target.checked)}
      />{' '}
      Seulement les produits en stock
    </div>
  );
}

SearchCars.propTypes = {
  filterText: PropTypes.string,
  inStock: PropTypes.bool,
  energie: PropTypes.object,
  handleFilterText: PropTypes.func,
  handleStockChange: PropTypes.func,
  handleEnergieChecked: PropTypes.func,
};
