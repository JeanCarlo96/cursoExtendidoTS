import { getPokemon, consultarPokemon } from './generics/get-pokemon';

// Llamando una función que tenemos en otro archivo
getPokemon(4)
.then(pokemon => console.log(pokemon.sprites.front_default))
.catch(error => console.error(error))
.finally(() => console.log('Fin de getPokemon'));

consultarPokemon(1)
    .then(pokemon => console.log(`El pokemon encontrado es: ${pokemon.name}`))
    .catch(err => console.error(err));