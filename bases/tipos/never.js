"use strict";
/**
 * Tipo never en TypeScript
 */
(() => {
    // El never no es void
    // El never no es undefine    
    // Una función never no debe terminar exitosamente
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Auxilio!!!');
    console.log('Hola Mundo');
})();
//# sourceMappingURL=never.js.map