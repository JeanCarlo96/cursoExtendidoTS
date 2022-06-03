"use strict";
/**
 * Tuplas en TypeScript
 */
(() => {
    const hero = ['Dr. Strange', 100, true];
    // Error de tipo
    //hero[0] = 50;
    //hero[1] = 'Ironman';
    hero[2] = false;
    console.log(hero);
})();
