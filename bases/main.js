"use strict";
(() => {
    // Sección 1
    const mensaje = 'Hola Mundo';
    console.log(mensaje);
    const hero = {
        name: 'Iron Man',
        age: 45
    };
    // Error de tipo
    //hero.age = '60';
    console.log(hero.age);
    // Sección 2
    // Tipos de Datos
    const a = 10; // Cuando declaramos una constante TS crea ese tipo de dato
    let b = 10;
    // Tipo de dato any en TS es cualquier cosa
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('Hello World');
})();
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
/**
 * Parámetros por Defecto en TypeScript
 */
(() => {
    // Parámetro Por defecto upper: toma valor de false si no lo mandan
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
/**
 * Argumentos Opcionales en TypeScript
 */
(() => {
    //El símbolo de interrogación ?, se refiere a que es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
/**
 * Argumentos Requeridos en TypeScript
 */
(() => {
    // Argumentos Obligatorios
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
/**
 * Argumentos Rest en TypeScript
 */
(() => {
    // Función con una cantidad no definida de argumentos opcionales
    // Resto de argumentos (...)
    const fullName = (firstName, ...restArgs) => {
        return `${firstName}, ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');
    console.log({ superman });
})();
/**
 * Tipo Función en TypeScript
 */
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    // Tipo any
    let myFunction;
    // Correcto por que any soporta cualquier cosa
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Jean Carlo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    // Como definir un tipo función con cierta firma
    let myFunction2;
    // Correcto
    myFunction2 = addNumber;
    // Incorrecto
    //myFunction2 = greet;
    let myFunction3;
    // Correcto
    myFunction3 = greet;
    // Incorrecto
    //myFunction3 = addNumber;
    let myFunction4;
    // Correcto
    myFunction4 = saveTheWorld;
    // Incorrecto
    //myFunction4 = greet;
})();
/**
 * Funciones en TypeScript
 */
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal Activada';
    };
    console.log(typeof returnName);
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
console.log(charles);
console.log(apocalipsis);
/**
 * Objetos en TypeScript
 */
(() => {
    // Objeto Literal
    let flash = {
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
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    //console.log(flash.getName());
})();
/**
 * Tipos Personalizados en TypeScript
 */
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo'],
    };
    let batman = {
        name: 'Bruce Wayne',
        powers: ['Super Estratega'],
        getName() {
            return this.name;
        }
    };
})();
/**
 * Múltiples tipos en TypeScript
 */
(() => {
    let myCustomeVariable = 'Fernando';
    console.log(typeof myCustomeVariable);
    myCustomeVariable = 20;
    console.log(typeof myCustomeVariable);
    myCustomeVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomeVariable);
})();
/**
 * Tipo de dato any en TypeScript
 */
(() => {
    let avengers = 123;
    let exists;
    let power;
    avengers = 'Dr. Strange';
    //console.log(avengers.charAt(0));
    // Tipo de casteo
    console.log(avengers.charAt(0));
    avengers = 150.0232356485;
    //console.log(avengers.toFixed(2));
    console.log(avengers.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let SuperHeroLevel;
    (function (SuperHeroLevel) {
        SuperHeroLevel[SuperHeroLevel["acuaman"] = 0] = "acuaman";
        SuperHeroLevel[SuperHeroLevel["batman"] = 1] = "batman";
        SuperHeroLevel[SuperHeroLevel["flash"] = 5] = "flash";
        SuperHeroLevel[SuperHeroLevel["superman"] = 100] = "superman";
    })(SuperHeroLevel || (SuperHeroLevel = {}));
    const fuerzaFlash = SuperHeroLevel.flash;
    const fuerzaSuperman = SuperHeroLevel.superman;
    const fuerzaBatman = SuperHeroLevel.batman;
    const fuerzaAcuaman = SuperHeroLevel.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    // Enumeración
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(`Enumeración d: ${enumeracion.d}`);
})();
/**
 * Tipo de datos Arreglos en TypeScript
 */
(() => {
    //const numbers:(string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // No me permite insertar un boolean
    //numbers.push(true);
    numbers.push(11);
    //numbers.push('12');
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(value => console.log(value.toUpperCase()));
})();
/**
 * Booleans en TypeScritp
 */
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    // Nombre de la variable más su valor
    console.log({ isBatman });
    isSuperman = true && false;
    console.log({ isSuperman });
    // No me permite asignar un valor de otro tipo
    //isSuperman = (isBatman) ? 'ABC' : 'XYZ';
    //isSuperman = (isBatman) ? true : 'XYZ';
})();
/**
 * Enumeradores en TypeScript
 */
(() => {
    // Nivel de audio de 0 a 10
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
/**
 * Tipo never en TypeScript
 */
(() => {
    // El never no es void
    // El never no es undefine    
    // Una función never no debe terminar exitosamente
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Auxilio!!!');
    console.log('Hola Mundo');
})();
/**
 * Null y Undefine en TypeScript
 */
(() => {
    //let nada: undefined = undefined;
    // En las nuevas versiones TS ya no permite asignar undefine como valor para otros tipos
    //let nada: number = undefined;
    let isActive = undefined;
    isActive = true;
    //console.log(nada);
    console.log(isActive);
})();
/**
 * Número en TypeScript
 */
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problermas');
    }
    else {
        console.log('Nos salvamos');
    }
    // Number puede devoilver NaN que en JS es considerado un número
    avengers = Number('123A');
    console.log({ avengers });
})();
/**
 * Tipo de dato String en TypeScript
 */
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    // Concatenaciones
    console.log(`I'm ${batman}, ${abc.toString()}`);
    console.log(batman.toUpperCase());
    // ? null check, depende donde se coloca
    // Ejemplo: si la posicion 10 tiene algo, hacer la función
    // Caso contrario no hacer nada
    // undefine || cadena => cadena
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
/**
 * Tuplas en TypeScript
 */
(() => {
    const hero = ['Dr. Strange', 100, true];
    // Error de tipo
    //hero[0] = 50;
    //hero[1] = 'Ironman';
    hero[2] = false;
    console.log(hero);
})();
/**
 * Tipo de Dato void en TypeScript
 */
(() => {
    // undefine es diferente de null
    // se refiere a que no hay un valor de retorno
    function callBatman() {
        // Error por que se supone que no regresa nada
        //return 1;
        return;
    }
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
        // Error por que true no es undefine
        //return true;
        return;
    };
})();
//# sourceMappingURL=main.js.map