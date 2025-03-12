(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado!');
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            public name: string,
            public realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            //console.log('Consturctor Xmen llamado');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string){

            if(name.length < 3){
                throw new Error('El nombre debe ser mayor de 3 letras')
            }

            this.name = name;
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName());
        }

    }

    //const wolverine = new Xmen('Wolverine', 'Logan', true);
    //wolverine.getFullNameDesdeXmen();
    //console.log(wolverine.fullName);
    //wolverine.fullName = 'lobezno';
    //console.log(wolverine.fullName);

})()