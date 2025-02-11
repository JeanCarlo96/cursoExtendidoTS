"use strict";
(() => {
    const a = 10;
    let b = 'Jean Marchesini';
    console.log(a);
})();
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
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'Last Name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorl = () => `El Mundo está salvado`;
    let myFunction;
    myFunction = greet;
    console.log(myFunction('Jean Carlo'));
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Bati Señal Activada';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
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
    console.log(villanos);
    const charles = {
        poder: 'psiquico',
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', "Psylocke", 'Angel']
    };
    console.log(apocalipsis);
    let mystic;
    mystic = charles;
    mystic = apocalipsis;
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(1));
    avenger = 150.232324125;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    (villians.forEach(v => console.log(v.toUpperCase())));
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman });
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!!!!');
    console.log('Hola Mundo');
})();
(() => {
    let nadisActive = undefined;
    console.log(nadisActive);
    console.log(null != undefined);
})();
(() => {
    let avengers = 1;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(` I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map