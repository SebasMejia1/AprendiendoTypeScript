//Tipado de funciones

const sayHiFunction = (fn: (name: string)  => void )  =>{ // Seria un error tipar la fn como tipo funcion, por eso se tipa de manera especifica tipando sus parametros
    return fn('Sebas')
}

const sayHi = ((name: string) : void =>{ // Para remediar el any implicito podria tipar el name de tipo string
    console.log(`Hi ${name}`)
})

sayHiFunction(sayHi)

// Funciones
function saludarTipadoManual(name: string) { // Podemos declarar el tipo de los parametros que llegan
    console.log(`Hola saludar ${name}`)
}

saludarTipadoManual(2) // Ts nos advierte que el dato que recibe por parametro debe ser tipo string

function saludarTipadoRetorno(name: string) : number { // Podemos declarar el tipo de los parametros que retorna
    console.log(`Hola saludar ${name}`)
}

function saludarConObjetoAny({name, age}){ // ❌ No salta la advertencia de que es tipo any implicito el objeto que llega como parametro
    console.log(`Hola ${name} con años ${age}`)
}

saludarConObjetoAny({name:'Sebas', age: 2}) // ❌ Son tipo any, no importa el tipo de dato que le mande

function saludarConObjeto({name, age}: {name: string, age: number}){
    console.log(`Hola ${name} con años ${age}`)
}

saludarConObjeto({name:'Sebas', age: 20})

//CASO PARTICULAR DE RETORNO DE DATO NEVER

function throwError(message: string): never{
    throw new Error(message)
}