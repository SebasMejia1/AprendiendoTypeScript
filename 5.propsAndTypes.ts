//! Optional properties

//! Template unionTypes 
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HexadecimalColor = `#${string}`
const color: HexadecimalColor = '#0123123'
// const colorMal: HexadecimalColor = '0123123'

//! UnionTypes
// Se refiere a la union o adicio de tipos con el | 
type HeroPower = 'local' | 'planetario' | 'galactico' | 'universal' | 'multiverso'
let ann: number | string | 2
// ann = boolean

const enableAnimationDuration: boolean | number = 200

//! IntersectionTypes 
// Esto se refiere a la diversificacion de tipos para luego poder unirlo de manera explicita uniendo los tipos diversificados con el & 

type HeroBasicInfo = {
    name: string,
    age: number,
}

type HeroPropierties = {
    readonly id?: HeroId,
    isActive?: boolean,
    powerScale?: HeroPower
}

type Hero = HeroBasicInfo & HeroPropierties

// type Hero = {
//     readonly id?: HeroId, // Podemos evitar la mutabilidad de props con el tipo readOnly 
//     name: string,
//     age: number,
//     isActive?: boolean, // Con signo de interrogacion podemos decirle que la prop puede ser opcional en caso de no ponerla no tendremos problema
//     powerScale?: HeroPower
// }

let hero : Hero = {
    name: 'thor',
    age: 1500
}

function createHero(input: HeroBasicInfo):Hero{
    const { name, age } = input
    return { 
        id: crypto.randomUUID(), // Es nativo de web con formato string-string-string-string-string
        name, 
        age, 
        isActive: true}
}

const thor = createHero({name:'thor', age:1500})

thor.powerScale= 'local'

thor.id?.toString() // Tambien con el signo ts verifica de manera interna si la prop existe y dependiendo de ello define si hace o no la ejecución del mismo

// thor.id = '1asdasd  ----> ❌ Esto no va a funcionar gracias al readOnly'

// En js para hacer algo inmutable se haria con el objetFreeze

const OFthor = Object.freeze(createHero({name:'thor', age:1500}))

//! TypeIndexing
type HeroPropiertiesIndex = {
    isActive: boolean,
    address: {
        planet: string,
        city: string,
    }
}

const addresHero :  HeroPropiertiesIndex['address'] = {
    planet: 'Tierra ',
    city: 'Medellin'
}