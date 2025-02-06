"use strict";
(() => {
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        }
    };
    const villanos = [{
            nombre: 'Lex Lutor',
            edad: 54,
            mutante: false
        }, {
            nombre: 'Erick Magnus Lehnsherr',
            edad: 49,
            mutante: false
        }, {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', "Psylocke", 'Angel']
    };
    let mystic;
    mystic = charles;
    mystic = apocalipsis;
})();
