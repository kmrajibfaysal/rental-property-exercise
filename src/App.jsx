import './App.css';
import PropertyList from './components/PropertyList';

const properties = [
  { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
  { id: 129032, name: 'Ak Sultan', rating: 4.9, price: 150 },
  { id: 129033, name: 'Tipu Mastan', rating: 4.9, price: 150 },
  { id: 129034, name: 'Kolar bapari', rating: 4.9, price: 150 },
  { id: 129035, name: 'Adu Vai', rating: 4.9, price: 150 },
  { id: 129036, name: 'Komla Sheikh', rating: 4.9, price: 150 },
  { id: 129037, name: 'Dora villa', rating: 4.4, price: 250 },
];

function App() {
  return (
    <>
      <PropertyList obj={properties} />
    </>
  );
}

export default App;
