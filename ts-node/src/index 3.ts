import { printObjetct, genericFunction, genericFuntionArrow} from './generics/genericts';

printObjetct(123);
printObjetct(new Date());
printObjetct({a: 1, b: 2, v: 3});
printObjetct('abcdef');
printObjetct(true);

const name: string = 'Jean Carlo Marchesini';

// number
console.log(genericFunction(3.141516).toFixed(2));
// string
console.log(genericFunction(name).toUpperCase());

// Erro, por que estamos trabajando con eny
//console.log(genericFunction('Hola Mundo').toFixed(2));

// Usando la función genérica ocn flecha
// number
console.log(genericFuntionArrow(3.141516).toFixed(2));
// string
console.log(genericFuntionArrow(name).toLowerCase());