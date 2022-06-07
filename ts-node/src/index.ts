//import { Hero as SuperHero} from './classes/Hero';
import * as HeroClasses from './classes/Hero';
//import { powers } from './data/powers';
// Importación por defecto
import powersName, { Power } from './data/powers';

// Intancia de un objeto cuya clase está en otro archivo
const ironman = new HeroClasses.Hero('Ironman', 1, 55);

console.log(ironman);

// Imprimiendo la constante de la clase Hero
console.log(HeroClasses.PI);

console.log(HeroClasses.myName);

// Imprimiendo un arreglo de la clase Powers
//powers.forEach((valor) => {
powersName.forEach((valor) => {
    console.log(valor);
});


console.log(ironman.power);




