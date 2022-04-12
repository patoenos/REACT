import React from 'react';
import ItemCount from './ItemCount';

   

export default function ItemListContainer(){
    let initial = 1;
    let stock = 20;
    
    function onAdd(cuanto){
        alert(cuanto);
       /*  arrayDeProductos=[]; todavia no funciona por lo de los estados que no he visto */
    };

return (
    <>        
     <h3>En este ejemplo de contador, el valor inicial es 1 y el tope es 20</h3>
     <h4>No deja subir de 20 y tampoco deja bajar de 0 a menos que se de clic en reseteo a 1</h4>
      <br /> 
      <ItemCount initial={initial} stock={stock}/>
      {/* //Aparte de pasarle onAdd, pasarle el inventario(desde donde arranca y hasta donde) */}     
    </>
)
}