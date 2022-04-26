import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';


export default function PruebaDinamica(){
    const {id} = useParams();
    useEffect(()=>{

    },[id]);

return (
    <>
        <p>Probando dinamismo: {id}</p>

    </>
)
}