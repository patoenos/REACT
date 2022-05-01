import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function ItemCount({initial, stock , addToCart}){ //aqui se recibe el tope y el arranque y la funcion agregar al carro

    const [activado, setActivado] = useState(true);   //Activado indica si se dió click en el boton de Agregar al carro
    //Ya existe una condicion dentro del boton para que no deje agregar 0 items al carrito.

    const [cant,setCant] = useState(initial); /* aqui no arranca en cero, arranca con la existencia */
    
    function Increase(){        
        if (cant < stock){            
            console.log(cant+1);            
            setCant(cant+1);
           /*  console.log("Incremento\n"); */            
        }
    }
    function Decrease(){        
        if (cant >= initial){
            console.log(cant-1);
            setCant(cant-1);
          /*   console.log("Decremento\n"); */
            
        }
    }
    function Reset(){
        setCant(initial);              
        console.log("Reseteo\n");
        console.log(initial);
       
    } 
    function handleClick(){
        if (cant > 0){
            alert('Agregaste ' + cant + ' items a tu carrito');
            addToCart(cant); //le paso la cantidad a la funcion                 
            setActivado(false);  
            }    
        }
      if(activado){  //activado funciona true para disable, osea que si es true, me desaparece botones.
                    // pero tambien usamos activado para saber qué mostrar, si el contador, o el boton de ir al carro.
          return(
              <>
              <div className='divEstilo'>
                <Button disabled={!activado} className='botonCantidad' variant="primary" onClick={Decrease}>-</Button>    
                <span className='estiloCantidad'>{cant}</span>
                <Button disabled={!activado} className='botonCantidad' variant="primary" onClick={Increase}>+</Button>    
              </div>
              <div className='divEstilo' >
              <Button disabled={!activado} className='botonCantidad2' variant="primary" onClick={Reset}>Reset a 1</Button>    
              <Button disabled={!activado || cant<1} className='botonCantidad2' variant="primary" onClick={handleClick}>Agregar al Carrito</Button>
              </div>
              </>
          )
        }
       else{
         return(
            <>  
             <div className='divEstilo' >
            <Button className='verCarrito' variant="primary"><Link style={{color:"#939d9e"}} to={`/cart/`}>Ver el Carrito</Link></Button>   
            </div> 
            </>
        )
       }
    
   /*  return(
    <>
    <h1>Estado de activado: {JSON.stringify(activado)}</h1>    
    <div className='divEstilo'>
    <Button disabled={!activado} className='botonCantidad' variant="primary" onClick={Decrease}>-</Button>    
    <span className='estiloCantidad'>{cant}</span>
    <Button disabled={!activado} className='botonCantidad' variant="primary" onClick={Increase}>+</Button>    
    </div>
    <div className='divEstilo' >
    <Button disabled={!activado} className='botonCantidad2' variant="primary" onClick={Reset}>Reset a 1</Button>    
     
    <br />    
    {activado ? 
    <Button disabled={!activado || cant<1} className='botonCantidad2' variant="primary" onClick={handleClick}>Agregar al Carrito</Button> 
    : 
    <Button disabled={activado} className='botonCantidad2' variant="primary"><Link style={{color:"#939d9e"}} to={`/cart/`}>Ver el Carrito</Link></Button>   
    }              
        </div>
    </>   
) */
}