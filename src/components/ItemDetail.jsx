import React from 'react';
import Item from './Item';

export default function ItemDetail({pasarProds}){ 
    
return (
    <>        {/* Aqui va la tarjeta mas grande
    <div >
        <img src={pasarProds.image} alt={"aqui va una imagen"} />
        <div >
            <h2>{pasarProds.description}</h2>
            <h2 >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia voluptatem commodi architecto deleniti repudiandae
                consectetur necessitatibus, id eaque suscipit vero.
            </p>
            <div>
                <h3>{pasarProds.price}</h3>                
            </div>
        </div>
        </div>
              */}
    
   <Item id={pasarProds.id} descripcion={pasarProds.description} precio={pasarProds.price} imagen={pasarProds.image} counter={true}/> 
       
    </>
)
};