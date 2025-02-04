"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorl = () => `El Mundo está salvado`;
    let myFunction;
    //myFunction = 10;
    //console.log(myFunction);
    //myFunction = addNumber;
    //console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Jean Carlo'));
    //myFunction = saveTheWorl;
    //console.log(myFunction());
})();
