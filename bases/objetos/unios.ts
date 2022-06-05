/**
 * Múltiples tipos en TypeScript
 */
(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomeVariable: (string | number | Hero) = 'Fernando';
    console.log(typeof myCustomeVariable);

    myCustomeVariable = 20;
    console.log(typeof myCustomeVariable);

    myCustomeVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomeVariable);

})();