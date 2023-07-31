// El narrowing es minimizar la posibilidad de ambiguedad de ts para la inferencia de tipos o metodos del mismo
// En este caso no se podria hacer el metodo .length ya que puede ser un number o string
// function mostrarLongitud (objeto: number | string){
//     return objeto.length
// }


// Pero si hacemos el narrowing para inferirle que es un string
function mostrarLongitud (objeto: number | string){
    if(typeof objeto === 'string'){ // En este momento el objeto puede ser string o number
        return objeto.length // Aca ya infiere que debe ser un string
    }
}

// OTRO EJEMPLO

interface Mario {
    company: 'nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic{
    company: 'sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

//Type guard

function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return(personaje as Sonic).correr != undefined // Aca hacemos la asersio de si es sonic con el as Sonic
}

function jugar(personaje: Personaje){
    // console.log(personaje.saltar()) // En este caso no se podria ya que sonic no tiene el prop de saltar entonces le hacemos el narrowing de saltar
    if(personaje.company == 'nintendo'){ // Hacemos un discriminacion de atributos
        console.log(personaje.saltar()) // Aca solo podria entrar si el personaje es Mario
    }

    // En caso tal de no tener la compañia para hacer la discriminacion lo hacemos el type guard que hicimos antes
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}