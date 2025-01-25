"use strict";
(() => {
    // tsconfig: strictNullChecks = false; permite unfedined a un tipo cualquiera
    let nadisActive = undefined;
    console.log(nadisActive);
    console.log(null != undefined);
})();
