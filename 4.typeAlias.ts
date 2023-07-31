//!typeAlias
// type Hero = { //? Importante cada type se crea en pascalCase
//     name: string,
//     age: number
// }

// let hero : Hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(name: string, age: number){
//     return{
//         name, age
//     }
// }

// const thor = createHero('thor', 1500) // Aca realmente ts no sabe que nos referimos a la creacion de un hero, por ello podemos crear typeAlias para inferir tipos unicos

// function createHero(hero: Hero):Hero{
//     const { name, age } = hero
//     return { name, age }
// }

// const thor = createHero({name:'thor', age:1500}) // al no declarar que es de nuestro type Hero solo nos diria que devolveria un objeto, en caso contrario notamos como ahora dice que devuelve un type Hero

