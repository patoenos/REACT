import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';



export default function ItemCount({initial, stock}){ //aqui se recibe el tope y el arranque
   
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
    function onAdd(){
        if (cant > 0){
        alert('Agregaste ' + cant + ' items a tu carrito');
        }else{
            alert('No puedes comprar cero cantidad');
        }
    }

return(
    <>
    <div className='divEstilo'>
    <Button className='botonCantidad' variant="primary" onClick={Decrease}>-</Button>    
 
    <span className='estiloCantidad'>{cant}</span>
 
    <Button className='botonCantidad' variant="primary" onClick={Increase}>+</Button>    
    </div>
    
    <div className='divEstilo' >
    <Button className='botonCantidad2' variant="primary" onClick={Reset}>Reset a 1</Button>        
    <br />
    <Button disabled={cant<1} className='botonCantidad2' variant="primary" onClick={onAdd}>Comprar</Button>            
    </div>
    </>   
)
}