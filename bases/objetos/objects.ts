/**
 * Objetos en TypeScript
 */

(() => {

    // Objeto Literal
    let flash: {name:string, age?:number, powers: string[], getName?: () => string} = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    };

    // Accediendo a sus propiedades
    console.log(flash.name);
    console.log(flash.age);
    console.log(flash.powers);

     flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Super Fuerza'],
        getName(){
            return this.name;
        }
    };
    
    console.log(flash);
    //console.log(flash.getName());

})();