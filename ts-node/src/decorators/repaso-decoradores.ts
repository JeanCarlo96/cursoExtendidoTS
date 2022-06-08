/**
 * Repasando Decoradores en TypeScrit
 */
// Ejemplo Decorador de Clase
function log(constructor: Function): void{
    console.log(constructor);
}

@log
class MiClase {
    constructor(){
        console.log('Mensaje desde el constructor');
    }   
}

let miClase = new MiClase();