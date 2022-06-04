"use strict";
/**
 * Argumentos Opcionales en TypeScript
 */
(() => {
    //El símbolo de interrogación ?, se refiere a que es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
