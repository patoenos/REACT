import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import estilos from '../components/Item.module.css';
import { Link } from 'react-router-dom';

export default function Item({id,descripcion,precio,imagen,counter}){ //<-- aca va a recibir algo, seguro el elemento individual de un array del Item List
return (    
<>
<Card key={id} className={estilos.cardDiv2} style={{ width: '18rem' }}>
  <Card.Img variant="top" width={200} height={150} alt="Aqui va una IMG" src={imagen} />
  <Card.Body>
    <Card.Title className='altura'>{descripcion}</Card.Title>
    
    <Card.Text className='textoCard'>
     $ {precio}
    </Card.Text>
    <p>Este es el id{id}</p>
    <Link style={{color:"#939d9e"}} to={`/articulo/${id}`}>Ver Detalle</Link>   {/* NI IDEA PORQUE NO LEE EL VALOR DE ID */}
    {counter ? (<ItemCount initial={1} stock={5}/>): counter=false}
         
  </Card.Body>
</Card>   
</>
)
}   