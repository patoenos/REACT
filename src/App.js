import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (    
        <>
      <NavBar/>
      <h2>Bienvenidos a la Página de la liga de Sim Racing MRL</h2>
      <ItemListContainer listaItems = {"Ferrari, Mercedes, Red Bull, Hass, Alfa Romeo, Alpha Tauri, Williams, McLaren, Alpine Aston Martin"} />

     {/*  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */ 
    }
    </>
  );
}

export default App;
