interface Hero { // Es algo similar a los tipos pero se asemeja un poco a las clases en js
    id: string,
    name: string,
    age: number,
    saludar: () => void
}

const hero: Hero =  {
    id: '1',
    name: 'Hulk',
    age: 1500,
    saludar: ()=>{
        console.log('Hulkla')
    }
}

interface Producto {
    id: number,
    nombre: string,
    precio: number,
    cantidad: number
}

interface Tenis extends Producto{ //Podemos extender de interfaces anteriores poara añadir props
    talla: number
}

interface CarritoDeCompras{
    totalPrice: number,
    productos: (Producto | Tenis)[] //Podemos definir tipos en otras interfaces con otra interface
}

//Tipado de funciones en interfaces
interface CarritoOps {
    add: (product : Producto) => void,
    remove: (id: number) => void,
}

interface CarritoOps { // Una advertencia usando interfaces es que podemos declarar dos veces una misma y simplemente se van a fusionar por ello hay que tener cuidado a la hora de crearlas
    // add(product : Producto) : void, // identificador duplicado por ende no se podria crear
    clear() : void //Se agregaria al add y remove
}

// const carritoOps: CarritoOps = {} // Aca veremos como nos requiere los tres metodos

const carrito: CarritoDeCompras = {
    totalPrice: 1000,
    productos:[
        {
            id: 1,
            nombre: 'Sebastian',
            precio: 1500,
            cantidad: 1500,
        }
    ],
}