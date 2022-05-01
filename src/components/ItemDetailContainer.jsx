import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import estilo from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';
import { traerProducto } from '../components/Productos';

export default function ItemDetailContainer(){
    
    const [productito, setProducto] = useState({}); //inicializa un objeto vacío creo se diferencia de array porque es uno solo en el archivo  
    /* let count=0;
    const [canti, setCanti] = useState(count); */
    const {idx} = useParams();
    
    useEffect (()=>{
       traerProducto(idx)
        .then((loquesea)=>{
            setProducto(loquesea);
            console.log('Promesa de un articulo: ',loquesea);
            console.log('El id en este momento vale: ',idx);
        })
        .catch(err=>console.log(err));
    }, [idx]);
return (
    <>      
        <div className={estilo.cardDiv}>
        <ItemDetail pasarProds={productito}/>
        </div> 
    </>
)
}