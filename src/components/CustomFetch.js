let isOk = true;
function customFetch(time,task) {
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            if (isOk) {
                res(task);
            } else{
                 rej('Error');
            }
        },time);
    })
}

/* function traerProducto() {
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            if (isOk) {
                res(task);
            } else{
                 rej('Error');
            }
        },time);
    })
} */
export default customFetch;