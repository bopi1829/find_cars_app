import './App.css';
import FilterCars from './components/FilterCars';
import Cars from './data/Cars';

function App() {
  return (
    <>
      <FilterCars cars={Cars} />
    </>
  );
}

export default App;
