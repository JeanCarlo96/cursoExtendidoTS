/**
 * Tipo de dato any en TypeScript
 */
(() => {

    let avengers: any = 123;
    let exists;
    let power;

    avengers = 'Dr. Strange';
    //console.log(avengers.charAt(0));
    // Tipo de casteo
    console.log((avengers as string).charAt(0));

    avengers = 150.0232356485;
    //console.log(avengers.toFixed(2));
    console.log((<number>avengers).toFixed(2));

    console.log(exists);
    console.log(power);

})();