const avengers = ['Spiderman','hulk','Ironman']
// Inferencia de funciones anonimas segun el contexto en este caso del array ya que sabe que es de strings
avengers.forEach(avenger=>{
    console.log(avenger.toUpperCase)
})

// Objetos
// let hero = {
//     name: 'thor',
//     age: 1500
// }

// // hero.age= 'asd' // Ts nos da el error de que la prop age es de tipo number por la inferencia

// function createHero(name: string, age: number){
//     return{
//         name, age
//     }
// }

// const thor = createHero('thor', 1500)

//Arrays
// const lenguajes= [] //Manera incorrecta de tipar arrays ya que asi estariamos diciendo que seria un array con retorno de never
// const lenguajes: string[] = [] //Manera correcta de tipar arrays
const lenguajes: (string | number)[] = [] //Manera de hacer el unionType con arrays

lenguajes.push('JavaScript')
lenguajes.push('PHP')
lenguajes.push(2)