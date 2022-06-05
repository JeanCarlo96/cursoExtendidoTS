"use strict";
/**
 * Número en TypeScript
 */
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problermas');
    }
    else {
        console.log('Nos salvamos');
    }
    // Number puede devoilver NaN que en JS es considerado un número
    avengers = Number('123A');
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map