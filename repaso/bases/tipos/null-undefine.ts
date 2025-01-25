(() => {

    // tsconfig: strictNullChecks = false; permite unfedined a un tipo cualquiera
    let nadisActive: (boolean | undefined) = undefined;

    console.log(nadisActive);
    console.log(null != undefined);

})()