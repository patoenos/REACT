import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import estilo from '../components/ItemDetail.module.css';


export default function ItemDetail({pasarProds}){ 
    
return (
    <>
    {pasarProds.id &&
    <div className= {estilo.itemDetailDiv}>
        <div className={estilo.imagen}>
        <img height={"400px"}  src={pasarProds.image} alt={"aqui va una imagen"} />
        </div>
        <div className={estilo.redaccion} >
            <h2>{pasarProds.description}</h2>
            <h3 >
                Sólo <span>{pasarProds.stock}</span> en inventario!
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia voluptatem commodi architecto deleniti repudiandae.
               
            </p>
            <div>
                <h2>${pasarProds.price}</h2>                
            </div>
        </div>
        <br /><br />
        <ItemCount initial={1} stock={pasarProds.stock}/>
       
    </div>
    } {!pasarProds.id && <h2>Cargando Producto ...</h2>}
    </>
)
};