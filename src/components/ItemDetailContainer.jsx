import React, { useEffect, useState } from 'react';
import customFetch from './CustomFetch';
import ItemDetail from './ItemDetail';
import aliasProductos from './Producto';
import estilo from './ItemListContainer.module.css';

export default function ItemDetailContainer(){
    
    const [productito, setProducto] = useState({}); //inicializa un objeto vacío creo se diferencia de array porque es uno solo en el archivo  
    
    useEffect (()=>{
        customFetch(2000, aliasProductos) //Esto sería el GetItem de la consigna
        .then((loquesea)=>{
            setProducto(loquesea)
        })
        .catch(err=>console.log(err));
    }, [productito]);
return (
    <>      
        <div className={estilo.cardDiv}>
        <ItemDetail pasarProds={productito}/>
        </div> 
    </>
)
}