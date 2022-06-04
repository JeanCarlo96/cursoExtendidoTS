/**
 * Argumentos Rest en TypeScript
 */
(() => {

    // Función con una cantidad no definida de argumentos opcionales
    // Resto de argumentos (...)
    const fullName = (firstName:string, ...restArgs:string[]) => {
        return `${firstName}, ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');

    console.log({ superman });
})();