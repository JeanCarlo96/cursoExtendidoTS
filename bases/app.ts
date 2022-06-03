(() => {
    // Sección 1
const mensaje: string = 'Hola Mundo';

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
const a:number = 10; // Cuando declaramos una constante TS crea ese tipo de dato
let b:number = 10;

// Tipo de dato any en TS es cualquier cosa
function sayHello(msg:string) {
    console.log(msg);
}

sayHello('Hello World');

})()