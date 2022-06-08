/**
 * Genéricos en TypeScript
 */

export const printObjetct = (argument: any) => {
    console.log(argument);
};


// funcion tradicional
export function  tradicionalFunction(argument: any) {
    return argument;
}

// función genérica
export function genericFunction<T>(argument: T): T{
    return argument;
}

// función genérica con flecha
export const genericFuntionArrow = <T> (argument: T): T => argument;