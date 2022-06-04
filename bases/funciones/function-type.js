"use strict";
/**
 * Tipo Función en TypeScript
 */
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    // Tipo any
    let myFunction;
    // Correcto por que any soporta cualquier cosa
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Jean Carlo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    // Como definir un tipo función con cierta firma
    let myFunction2;
    // Correcto
    myFunction2 = addNumber;
    // Incorrecto
    //myFunction2 = greet;
    let myFunction3;
    // Correcto
    myFunction3 = greet;
    // Incorrecto
    //myFunction3 = addNumber;
    let myFunction4;
    // Correcto
    myFunction4 = saveTheWorld;
    // Incorrecto
    //myFunction4 = greet;
})();
