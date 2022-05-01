import React from "react";
export default function PruebaOnClick(){

    function handleOnClick(evt ){
       /*  console.log(evt); */
       evt.stopPropagation();
       alert('handleOnClick');
    }

return(
    <>
    PruebaOnCLick: <br />
    <div onClick={handleOnClick}>
        Prueba 1 Clic
        <div onClick={handleOnClick}>
            Prueba 2 Clic
        </div>
    </div>
    
    </>
);
}