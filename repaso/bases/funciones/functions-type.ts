(() => {

    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorl = () => `El Mundo está salvado`;

    let myFunction: (x: string) => string;
    
    //myFunction = 10;
    //console.log(myFunction);

    //myFunction = addNumber;
    //console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('Jean Carlo'));

    //myFunction = saveTheWorl;
    //console.log(myFunction());

})()