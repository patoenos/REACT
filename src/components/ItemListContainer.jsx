
import React, {useEffect, useState} from 'react';
import {traerProductos} from '../components/Productos';
import ItemList from './ItemList';
/* import catalogo from './Productos'; */
import estilo from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';

export default function ItemListContainer(){
   
    const [prods,setProds] = useState([]); 
    const [loading, setLoading] = useState(true);
    const {categoria} = useParams();

    
    console.log('😃', categoria);

    useEffect(()=>{  
       setLoading(true);     
       traerProductos(categoria)
        .then(resultado=>{
            setProds(resultado)          
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setLoading(false);
        });
    },[categoria])  
    
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