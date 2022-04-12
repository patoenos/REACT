
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Container from './components/Container';

function App() {
  
  return (    
        <>
      <NavBar/>
      <h2>Bienvenidos a la Página de la liga de Sim Racing MRL</h2>
      <Container/>
      <ItemListContainer listaItems = {"Ferrari, Mercedes, Red Bull, Hass, Alfa Romeo, Alpha Tauri, Williams, McLaren, Alpine Aston Martin"} />
     
    </>
  );
}

export default App;
