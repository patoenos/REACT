
import React, {useEffect, useState} from 'react';
import customFetch from './CustomFetch';
import ItemList from './ItemList';
import catalogo from './Productos';
import estilo from './ItemListContainer.module.css';

export default function ItemListContainer(){
    console.log("Lo que vale products ahora con catalogo1: \n");
    console.log(catalogo);

    const [prods,setProds] = useState([]); 

    useEffect(()=>{        
       customFetch(3000,catalogo)
        .then(resultado=>{
            setProds(resultado)
            console.log("Resultado contiene03: \n");
            console.log(resultado);
        })
        .catch(err=>console.log(err));
    },[prods])  

    console.log("Aqui se imprime prods2");
    console.log(prods);
return (
    <>
        <div className={estilo.cardDiv}>
        <ItemList  algo={prods}/> 
        </div>
    </>
    
);
}