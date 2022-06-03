"use strict";
/**
 * Booleans en TypeScritp
 */
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    // Nombre de la variable más su valor
    console.log({ isBatman });
    isSuperman = true && false;
    console.log({ isSuperman });
    // No me permite asignar un valor de otro tipo
    //isSuperman = (isBatman) ? 'ABC' : 'XYZ';
    //isSuperman = (isBatman) ? true : 'XYZ';
})();
