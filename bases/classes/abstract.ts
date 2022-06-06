/**
 * Clases Abstractas en TypeScript
 */

(() => {
    // No se puede crear una instancia de la clase Abstracta
    abstract class Mutante {
        constructor(
            public name:string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo!';
        }
    }

    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    //console.log(wolverine);
    //console.log(magneto);

    //console.log(wolverine.salvarMundo());
    //console.log(magneto.conquistarMundo());

    //Uso de la clase abstracta
    const printName = (character: Mutante) => {
        console.log(character.name);
    }

    //printName(wolverine);
    //printName(magneto);
    
})();