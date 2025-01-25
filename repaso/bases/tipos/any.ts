(() => {

    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    //console.log( avenger.charAt(1) );
    console.log( (avenger as string).charAt(1) );

    avenger = 150.232324125;
    console.log( <number>avenger.toFixed(2) );

    console.log( exists );
    console.log( power );

})()