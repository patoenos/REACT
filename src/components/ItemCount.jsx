import React, {useState} from 'react';



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
        setCant(1);
        console.log("Reseteo\n");
        console.log(cant);
    }
return(
    <>
    <button className='botonCantidad' onClick={Decrease}>-</button>
    <span className='estiloCantidad'>{cant}</span>
    <button className='botonCantidad' onClick={Increase}>+</button>
    <br />
    <button onClick={Reset}>Resetea a 1</button>       
    </>   
)
}