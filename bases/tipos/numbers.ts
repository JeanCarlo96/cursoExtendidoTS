/**
 * Número en TypeScript
 */
(() => {
    let avengers:number = 10;
    console.log(avengers);

    const villians:number = 20;
    
    if(avengers < villians){
        console.log('Estamos en problermas');
    }else{
        console.log('Nos salvamos');
    }

    // Number puede devoilver NaN que en JS es considerado un número
    avengers = Number('123A');
    console.log({avengers});
})();