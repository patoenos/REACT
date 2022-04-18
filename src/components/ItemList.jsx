import React from 'react';
import Item from './Item';

export default function ItemList({algo}){
    console.log("Imprime señal del Item List:");
    console.log(algo);
return (
   <>
   {algo.map(alias =>(
   <Item key={alias.id} descripcion={alias.description} precio={alias.price} imagen={alias.image}/>
   
   ))}
   
   
   </> 
    
)
}