"use strict";
/**
 * Null y Undefine en TypeScript
 */
(() => {
    //let nada: undefined = undefined;
    // En las nuevas versiones TS ya no permite asignar undefine como valor para otros tipos
    //let nada: number = undefined;
    let isActive = undefined;
    isActive = true;
    //console.log(nada);
    console.log(isActive);
})();
