"use strict";
function sumar(a, b) {
    return a + b;
}
var contar = (heroes) => {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal Activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(",");
};
const noHaceNada = () => { };
var noHaceNadaTampoco = noHaceNada;
