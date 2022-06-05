/**
 * Tipos Personalizados en TypeScript
 */

(() => {

    // Para definir un tipo
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let flash: Hero= {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo'],
    };

    let batman: Hero = {
        name: 'Bruce Wayne',
        powers: ['Super Estratega'],
        getName() {
            return this.name;
        }
    }
})();