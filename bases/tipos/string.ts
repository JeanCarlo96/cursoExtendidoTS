/**
 * Tipo de dato String en TypeScript
 */
(() => {

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna's Verde";
    const volcanNegro:string = `Héroe: Volcan Negro`;

    const abc = 123;

    // Concatenaciones
    console.log(`I'm ${batman}, ${abc.toString()}`);

    console.log(batman.toUpperCase());

    // ? null check, depende donde se coloca
    // Ejemplo: si la posicion 10 tiene algo, hacer la función
    // Caso contrario no hacer nada
    // undefine || cadena => cadena
    console.log(batman[10]?.toUpperCase() || 'No está presente');

})();