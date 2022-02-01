import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
  <div className="App">
    <NavBar />
    <ItemListContainer
    greeting="Clase4"/>
  </div>
  )
}
export default App;
