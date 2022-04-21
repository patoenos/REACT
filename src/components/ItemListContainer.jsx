
import React, {useEffect, useState} from 'react';
import customFetch from './CustomFetch';
import ItemList from './ItemList';
import catalogo from './Productos';
import estilo from './ItemListContainer.module.css';

export default function ItemListContainer(){
   
    const [prods,setProds] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(()=>{        
       customFetch(1000,catalogo)
        .then(resultado=>{
            setProds(resultado)          
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setLoading(false);
        });
    },[prods])  
    
return (
    <>
        {loading ? (<h2>Cargando Productos ...</h2>): (
            <div className={estilo.cardDiv}>
            <ItemList  algo={prods}/> 
            </div>
        )}        
    </>
    
);
}