import * as React from 'react';

export default function CartWidget(){
return (
    <>
        
        <img height={40} width={40} alt={"imagenCarrito"} src='https://whatemoji.org/wp-content/uploads/2020/07/Shopping-Cart-Emoji.png'></img>
        <span className='numCarrito'>{10}</span> 
    </>
)
}