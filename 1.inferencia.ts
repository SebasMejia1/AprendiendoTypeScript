let a = "Hola"
// ---> ❌ a = 2 // Por inferencia typeScript le dio tipo string a la variable "a"
// typeof a === "string"

const persona: string = "persona" // Tambien podemos tipar las variables de manera manual 

//Muestra de como ts tambien puede heredar el tipo a partir de variables anteriores o usadas de manera interna
const b = 1
const c = 2
const d = b + c //  Por lo tanto d Tambien sera de tipo number

// Tipos en typeScript
//* Any
let obj: any = {x: 0}
obj.foo()
obj()
obj.bar = 100
obj = "Hello"
const n: number = obj // Se puede manejar la variable de tipo any de la manera que queramos tal cual se haria en js