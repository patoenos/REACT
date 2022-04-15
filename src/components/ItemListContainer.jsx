
import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer({listaItems}){
    /* let x; //scope global */
    const [alumnos,setAlumnos] = useState([]); 


    useEffect(()=>{
        //first, se elimina el return porque no voy a hacer nada cuando se termine
        
        const promete = new Promise((resuelve, rechaza)=>{
 
            setTimeout(()=>{
                resuelve([
                    {id:'abc123', name:"Antonio", descripcion: "Ingeniero", stock: 1},
                    {id:'def456', name:"Ana Laura", descripcion: "Contadora", stock: 1},
                    {id:'ghi789', name:"Isaac", descripcion: "Estudiante", stock: 1}
                ]); 
               /*  rechaza(null); */
            },2000);            
        })

        promete
        .then((aliasres)=>{
            setAlumnos(aliasres);
            console.log(aliasres);
            
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
 
return (
    <>
        <br />
        Aca va la x: 
        {alumnos.map((algo,i)=> 
        <p key={i}>{ "  "+algo.id+"  "+ algo.name} </p> //Aqui deberia estar el componente ITEM
        )}
    
        <br />

       {/*  <ItemCount onAdd={onAdd}/> */}
        <h3>Lista de equipos a escoger: {listaItems}</h3>
    </>
    
);
}