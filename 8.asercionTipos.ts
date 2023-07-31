const canvas = document.getElementById('canvas') // Aca ts no infiere que lo que se recupera es un elemento canva

//En caso tal de querer recuperar el contexto del canva ts no nos dara la posibilidad ya que no sabe que tipo de elemento es

// const ctx = canvas.getContext('2d'); // nos da la advertencia de que canva puede ser nulo

//Podemos obligar a ts a saber que tipo es haciendo que cuando se cree el canva const canvas = document.getElementById('canvas') as HTMLCanvasElement
// pero es inseguro ya que en caso tal de no ser un canva ts segura tratandolo como canva

//Podemoos solucionarlo con un condicional
if(canvas != null) {
    // const ctx = canvas.getContext('2d'); // Aca ts dice que getContext no es un atributo de un tipo HtmlElement
    //Podemos hacer la asersion dentro de la comprobacion
    // const ctx = (canvas as HTMLCanvasElement).getContext('2d') // Pero segurimos teniendo la posibilidad de que no sea un canva y ts no se de cuenta
}

//La mejor opcion seria hacerlo precisamente en la condicion ya que de esta manera solo entrará un elemento que efectivamente sea un canva y le ayudanmos a canva a inferir el tipo
if(canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d'); // Ahora nos afirma dentro de la condicion que es un HtmlCanvasElement en caso de entrar
}


// TypeOf para tipos como: Strings, boolean, number
// InstanceOf para instancias como: date, submit



