import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Prueba from './components/Ui/Prueba/Prueba';
// import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
  <div className="App">
    <NavBar />
    <ItemListContainer
    greeting="Clase6"/>
 {/* <Prueba title="Contador"/> */}
    {/* <ItemCount 
    initial={1}
    stock={6}/> */}
  </div>
  )
}
export default App;
