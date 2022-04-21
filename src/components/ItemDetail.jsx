import React from 'react';
import Item from './Item';


export default function ItemDetail({pasarProds}){ 
    console.log(pasarProds); 
return (
    <>        
            <Item key={pasarProds.id} descripcion={pasarProds.description} precio={pasarProds.price} imagen={pasarProds.image} counter={true}/>  
           {/*  {pasarProds.map((alias) =>(
            <Item key={alias.id} descripcion={alias.description} precio={alias.price} imagen={alias.image}/>           
            ))}   */}   
       
    </>
)
};