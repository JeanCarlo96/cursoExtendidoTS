// Importando clase Pokemon
import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

console.log(charmander);

// Intentemos expandir
// Nos da error debido al uso del decorador
//(Pokemon.prototype as any).customName = 'Pikachu';

charmander.savePokemonToDB(1);

charmander.publicApi = 'Jean Carlo Marchesini';
console.log(charmander);