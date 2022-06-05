"use strict";
/**
 * Tipo de datos Arreglos en TypeScript
 */
(() => {
    //const numbers:(string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // No me permite insertar un boolean
    //numbers.push(true);
    numbers.push(11);
    //numbers.push('12');
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(value => console.log(value.toUpperCase()));
})();
//# sourceMappingURL=arrays.js.map