/**
 * Desestructuración en TypeScript
 */

(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson'        ,
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    };

    const {poder, vision} = avengers;

    console.log(vision.toUpperCase(), poder.toFixed(2));

    const printAvengers = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto);
    };

    printAvengers(avengers);
    
    // Otro Ejemplo
    type Persona = {
        nombre: string;
        edad: number;
        legal: boolean;
    };

    const persona1:Persona = {
        nombre: 'Jean Carlo',
        edad: 25,
        legal: true
    }

    const persona2:Persona = {
        nombre: 'Gissela Estefanía',
        edad: 27,
        legal: true
    };

    console.log(persona1);

    const imprimirPersona: (persona:Persona) => void = ({nombre, ...resto}) => {
        console.log(`Nombre: ${nombre}`);
        console.log(`${resto}`);
    };

    imprimirPersona(persona1);
    imprimirPersona(persona2);

    const avengersArr:[string, boolean, number] = ['Capitan America', true, 150.15];

    const [capi, ironman, ] = avengersArr;
    
    console.log(ironman, capi);

})();