"use strict";
/**
 * Múltiples tipos en TypeScript
 */
(() => {
    let myCustomeVariable = 'Fernando';
    console.log(typeof myCustomeVariable);
    myCustomeVariable = 20;
    console.log(typeof myCustomeVariable);
    myCustomeVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomeVariable);
})();
