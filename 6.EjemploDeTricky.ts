//! Esto es para poner en practica varios conceptos y aprender como manejar matrices con tupla en ts

/*
Estructura
[
    ['X', 'O', 'X'], //STRING[]
    ['O', 'X', 'O'], //STRING[]
    ['X', 'O', 'X'], //STRING[]
]

*/ 

type CellValue = 'X' | 'O' | ''

// const gameBoard: String[][] = [ Estaria mal ya que en este caso podriamos poner cualquier valor en las celdas
//     ['X', 'O', 'X'], 
//     ['O', 'X', 'O'], 
//     ['X', 'O', 'X'], 
// ] 


// const gameBoard: CellValue[][] = [ //Se podria escalar hacia los lados y no seria 3x3
//     ['X', 'O', 'X','X'], 
//     ['O', 'X', 'O','O'], 
//     ['X', 'O', 'X','O'], 
// ]

type GameBoard =  [ // TUPLA YA QUE ES UN ARRAY CON LIMITE DE LONG
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
]
const gameBoard: GameBoard = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'], 
    ['X', 'O', 'X'], 
]

