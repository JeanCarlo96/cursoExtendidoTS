function sumar(a: number, b: number): number{
    return a + b;
}

var contar = (heroes: string[]): number => {
    return heroes.length;
}

var superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

const llamarBatman = (llamar: boolean = true): void => {
    if(llamar){
        console.log("Batiseñal Activada");
    }
}

llamarBatman();

const unirheroes = (...personas: string[]): string => {
    return personas.join(",");
}

const noHaceNada: (numero: number, texto: string, booleano: boolean, arreglo: string[]) => void = () => {};

var noHaceNadaTampoco: (a: number, b: string, c: boolean, d: string[]) => void = noHaceNada;