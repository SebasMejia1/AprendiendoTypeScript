//Los enunms son equivalentes a variables de entorno en js donde podemos guardare strings o datos dentro de un objs

//Existen dos tipos de enum los const y los sin const

enum ERROR_TYPES { //Los enums deben ser para una cantidad de datos que conozcamos y no sean dinamicos
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
}

//ASI ES COMO SE VE COMPILADO A JS

// var ERROR_TYPES;
// (function (ERROR_TYPES) {
//     ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND";
//     ERROR_TYPES[ERROR_TYPES["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
//     ERROR_TYPES[ERROR_TYPES["FORBIDDEN"] = 2] = "FORBIDDEN";
// })(ERROR_TYPES || (ERROR_TYPES = {}));

const enum CONST_ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
}

// En caso de usar el const no genera codigo adicional y al momento de ejecutarlo lo hace de esta manera

// "use strict";
 
// function mostrarMensaje(tipoError) {
//     if (tipoError === 0 /* CONST_ERROR_TYPES.NOT_FOUND */) {
//         console.log('No se encuentra');
//     }
//     else if (tipoError === 1 /* CONST_ERROR_TYPES.UNAUTHORIZED */) {
//         console.log('No tienes permisos para acceder');
//     }
//     else if (tipoError === 2 /* CONST_ERROR_TYPES.FORBIDDEN */) {
//         console.log('El acceso es prohibido');
//     }
// }

function mostrarMensaje(tipoError){
    if(tipoError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra')
    }else if(tipoError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    }else if(tipoError === ERROR_TYPES.FORBIDDEN){
        console.log('El acceso es prohibido')
    }
}


