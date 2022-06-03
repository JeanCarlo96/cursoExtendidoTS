/**
 * Tipo de Dato void en TypeScript
 */
(() => {
    
    // undefine es diferente de null
    // se refiere a que no hay un valor de retorno
    function callBatman():void {
        // Error por que se supone que no regresa nada
        //return 1;
        return;
    }

    const a = callBatman();
    console.log(a);

    const callSuperman = (): void => {
        // Error por que true no es undefine
        //return true;
        return;
    }

})();