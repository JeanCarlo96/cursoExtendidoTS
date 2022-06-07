/**
 * Interfaces en TypeScript
 */
(() => {

    // Creando una interfaz 
    interface Hero {
        name: string;
        age: number;
        powers: string[];
        getName: () => string;
        printPowers: () => void;
    }

    const flash: Hero = {
        name: 'Barry Allen',
        age: 26,
        powers: ['Speed Force', 'Travel Time'],
        getName(){
            return this.name;
        },
        printPowers(){
            console.log(this.powers.join(' '));
        }
    }

    //console.log(flash);
    //flash.printPowers();

})();