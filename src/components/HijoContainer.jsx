import React, {useState} from 'react';

export default function HijoContainer({alias, borrar}){
    /* let x=0; */
    const [x,setX] = useState(0);
    console.log(x);
    

return (
    <> 
        <div>
            {alias.map(alias2=> <p>{alias2}</p>)}
        </div>
         <button onClick={()=>{
            borrar("nike");
        }}>BORRAR un Producto</button><br /><br /> 
        {/* Incrementa Valor */}
        <button className='botonCantidad' onClick={()=> {
            setX(x+1);
            
        }}>Incrementar X</button>

        <p className='valorCantidad'>{x}</p>       

        {/* Decrementa Valor */}
        <button onClick={()=> {
            if (x>=1){
                setX(x-1);
            }
            }}>Decrementar X</button>
    </>
)
}