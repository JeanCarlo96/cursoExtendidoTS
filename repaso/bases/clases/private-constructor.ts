(() => {

    class Apocalipsis {

        static intance: Apocalipsis;

        private constructor(
            public name: string
        ){
        }

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis('Soy APocalipsis el único');
            }

            return Apocalipsis.intance;
        }

        changeName(newName: string): void{
            this.name = newName;
        }

    }

    //const apocalipsis1 = new Apocalipsis('Soy Apocalipsis... el único');
    //const apocalipsis2 = new Apocalipsis('Soy Apocalipsis... el único');
    //const apocalipsis3 = new Apocalipsis('Soy Apocalipsis... el único');

    const apocalipsis1: Apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2: Apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis3: Apocalipsis = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);

})()