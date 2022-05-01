import React from 'react';
import Item from './Item';

export default function ItemList({algo}){

return (
   <>   
   {algo.map(alias =>(
   <Item key={alias.id} id={alias.id} descripcion={alias.description} precio={alias.price} imagen={alias.image} counter={false}/>   
   ))}   
   
   </> 
    
)
}