import CarsRow from './CarsRow';
import PropTypes from 'prop-types';

export default function CarsTable({ cars, filterText, inStock }) {
  const rows = [];
  cars.forEach((car) => {
    if (car.modele.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !car.stocked) {
      return;
    }

    rows.push(
      <CarsRow
        car={car}
        key={car.modele}
      />,
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modele</th>
            <th>Energie</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

CarsTable.propTypes = {
  cars: PropTypes.array,
  filterText: PropTypes.string,
  inStock: PropTypes.bool,
};
