"use strict";
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
