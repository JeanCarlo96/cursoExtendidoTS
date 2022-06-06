/**
 * Let y Var en TypeScript
 */
(() => {

    // Con var se podría llamar antes de declarar
    //console.log(a);

    //var a = 'Fernando';
    const nombre:string = 'Fernando';

    const getName = function(){
        console.log('Viejo getName');
    };

    /*
    No permitido desde ES6
    getName = () => {
        console.log('Nuevo getName');
    }*/


})();