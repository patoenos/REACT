const products = [
    {
    id: 1,
    description: "MXS 1.2 Dash Logger",
    price: 1245,
    image: "https://www.aimtechnologies.com/wp-content/uploads/2018/10/MXS-1.2.jpg",
    stock: 5,
    categoria: "dashboards",
    },
    {
    id: 2,
    description: "Formula Steering Wheel 3",
    price: 3650,
    image: "https://www.aimtechnologies.com/wp-content/uploads/2018/10/FORMULA-STEERING-WHEEL-3.jpg",
    stock: 15,
    categoria: "volantes",
    },
    {
    id: 3,
    description: "Smartycam HD",
    price: 2249,
    image: "https://www.aimtechnologies.com/wp-content/uploads/2018/10/SMARTYCAM-HD-Rev.-2.1.jpg",
    stock: 10,
    categoria: "camaras",
    },
    {
    id: 4,
    description: "Shift Light Module",
    price: 949,
    image: "https://www.aimtechnologies.com/wp-content/uploads/2018/10/Shift-Light-Module.jpg",
    stock: 6,
    categoria: "accesorios",
    },
    {
    id: 5,
    description: "MultiChron",
    price: 1089,
    image: "https://www.aimtechnologies.com/wp-content/uploads/2018/10/MULTICHRON.jpg",
    stock: 2,
    categoria: "accesorios",
    },
    {
    id: 6,
    description: "McLaren GT3 Steering Wheel",
    price: 2431,
    image: "https://gt3.es/wp-content/uploads/2018/04/volantes-simracing-1024x683.jpg",
    stock: 4,
    categoria: "volantes",
    } ,
    {
    id: 7,
    description: "TXS Sparco Thrustmaster",
    price: 2189,
    image: "https://cdn.simtechpro.com/wp-content/uploads/2018/03/Comprar-simuladores-conduccion-thrustmaster-TXSparco2.jpg",
    stock: 2,
    categoria: "volantes",
    },
    {
    id: 8,
    description: "SRX GT Dash for Fanatec CSW",
    price: 1096,
    image: "https://i.pinimg.com/originals/6c/28/0d/6c280d57ea0064bb4d16bd8aff404787.jpg",
    stock: 1,
    categoria: "dashboards",
    } ,      
];

export const traerProductos = (categoria) =>{
    return new Promise ((resolve,reject)=>{
        const productosFiltrados  = products.filter(
            (alias) => alias.categoria === categoria
        );
        setTimeout(()=>{
            if (categoria){
                resolve(productosFiltrados);
            } else {
                resolve(products);
            }
        },1000)
    });
};
export const traerProducto = (id) =>{
    return new Promise ((resolve,reject)=>{        
        const productoEscogido = products.find((alias)=>alias.id === Number(id)); //checar si el segundo id va dentro de number

        setTimeout(()=>{            
            resolve(productoEscogido); 
            console.log('productoescogido', productoEscogido);           
        },1000)
    });
};


