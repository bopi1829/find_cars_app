import PropTypes from 'prop-types';

export default function CarsRow({ car }) {
  let textColor = car.stocked ? (
    car.modele
  ) : (
    <span style={{ color: 'red' }}>{car.modele}</span>
  );

  return (
    <tr>
      <td>{car.marque}</td>
      <td>{textColor}</td>
      <td>{car.energie}</td>
      <td>{car.prix}</td>
    </tr>
  );
}

CarsRow.propTypes = {
  car: PropTypes.object,
};
