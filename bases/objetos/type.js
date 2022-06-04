"use strict";
/**
 * Tipos Personalizados en TypeScript
 */
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo'],
    };
    let batman = {
        name: 'Bruce Wayne',
        powers: ['Super Estratega'],
        getName() {
            return this.name;
        }
    };
})();
