/**
 * Consumiendo una API en TypeScript
 */

// Importando AXIOS
import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async(pokemonId: number): Promise<Pokemon> => {
    
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    return data;
};

export const consultarPokemon = async (identificador: number): Promise<Pokemon> => {
    const {data} = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + identificador);
    return data;
};