"use strict";
(() => {
    // Sección 1
    const mensaje = 'Hola Mundo';
    console.log(mensaje);
    const hero = {
        name: 'Iron Man',
        age: 45
    };
    // Error de tipo
    //hero.age = '60';
    console.log(hero.age);
    // Sección 2
    // Tipos de Datos
    const a = 10; // Cuando declaramos una constante TS crea ese tipo de dato
    let b = 10;
    // Tipo de dato any en TS es cualquier cosa
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('Hello World');
})();
