
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from './components/Principal';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFoundPage from './components/NotFoundPage';
import PruebaOnClick from './components/PruebaOnClick';
import Cart from './components/cart/Cart';


function App() {
  
  return (    
    <>
    
      <BrowserRouter>
        <NavBar/>       
          <Routes>
            {/* <Route exact path="/" element={<PruebaOnClick />} /> */}
            <Route exact path="/" element={<ItemListContainer />} /> 
            <Route exact path="/mercancia/" element={<ItemListContainer />} /> 
            <Route exact path="/categoria/:categoria" element={<ItemListContainer />} /> 
            <Route exact path="/articulo/:idx" element={<ItemDetailContainer/>} />  
            <Route exact path="/cart/" element={<Cart/>} />  
            <Route path="*" element={<NotFoundPage />} />  
          </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
