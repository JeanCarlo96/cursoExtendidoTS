(() => {
    // console.log(a);

    var a = 'Jean Carlo';

    const hero = {
        a: 1,
        b: 2
    };

    hero.b = 100;

    function getName() {
        console.log('getName Original');
    };

    //getName = () => {
    //    console.log('getName Modificado');
    //};

    //getName();
})()