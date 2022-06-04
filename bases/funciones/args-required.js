"use strict";
/**
 * Argumentos Requeridos en TypeScript
 */
(() => {
    // Argumentos Obligatorios
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
