"use strict";
/**
 * Tipo de Dato void en TypeScript
 */
(() => {
    // undefine es diferente de null
    // se refiere a que no hay un valor de retorno
    function callBatman() {
        // Error por que se supone que no regresa nada
        //return 1;
        return;
    }
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
        // Error por que true no es undefine
        //return true;
        return;
    };
})();
//# sourceMappingURL=void.js.map