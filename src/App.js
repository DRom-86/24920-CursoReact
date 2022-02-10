import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
//import Prueba from './components/Prueba/Prueba';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
  <div className="App">
    <NavBar />
    <ItemListContainer
    greeting="Clase5"/>
 {/* <Prueba title="Contador"/> */}
    <ItemCount 
    initial={1}
    stock={6}/>
  </div>
  )
}
export default App;
