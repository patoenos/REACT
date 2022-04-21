import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import estilos from '../components/Item.module.css';

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
    <Button variant="primary" disabled={counter}>Ver Detalle</Button>  
    {counter ? (<ItemCount initial={1} stock={5}/>): counter=counter }
         
  </Card.Body>
</Card>   
</>
)
}   