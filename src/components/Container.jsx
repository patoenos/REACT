import * as React from 'react';
import HijoContainer from './HijoContainer';

export default function Container(){
    let arrayDeProductos = ["zapato nike","campera adidas","otra cosa"];
    function borrar(unProductoParaBorrar){
        alert(unProductoParaBorrar);
       /*  arrayDeProductos=[]; todavia no funciona por lo de los estados que no he visto */
    };

return (
    <>        
      Padre Container  
      <br /> 
      <HijoContainer alias={arrayDeProductos} borrar={borrar}/>
      <br />
    {/*   {JSON.stringify(arrayDeProductos)}
      <br />
      {arrayDeProductos[1]} */}
    </>
)
}