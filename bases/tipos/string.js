"use strict";
/**
 * Tipo de dato String en TypeScript
 */
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    // Concatenaciones
    console.log(`I'm ${batman}, ${abc.toString()}`);
    console.log(batman.toUpperCase());
    // ? null check, depende donde se coloca
    // Ejemplo: si la posicion 10 tiene algo, hacer la función
    // Caso contrario no hacer nada
    // undefine || cadena => cadena
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
