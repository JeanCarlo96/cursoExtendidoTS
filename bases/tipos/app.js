"use strict";
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
//# sourceMappingURL=app.js.map