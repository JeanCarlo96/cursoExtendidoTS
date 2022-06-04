"use strict";
/**
 * Funciones en TypeScript
 */
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal Activada';
    };
    console.log(typeof returnName);
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
