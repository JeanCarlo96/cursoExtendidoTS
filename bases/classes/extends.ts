/**
 * Herencia, super y extends
 */

(() => {

    class Avenger {
        constructor(
            public name:string,
            public realName: string,
        ){
           // console.log('Constructor Avenger Llamado');
        }

        public getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){
            super(name, realName);
            //console.log('Constructor Xmen llamado');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name:string){
            if(name.length < 3){
                throw new Error('El número debe ser mayor a tres caracteres');
            }else{
                this.name = name;
            }
        }

        getFullNameDesdeXmen() {
            return super.getFullName() + ' ' + this.isMutant;
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    //console.log(wolverine);

    // Llamando a un método de clase hija que usa método de padre
    //console.log(wolverine.getFullNameDesdeXmen());

    // Accediendo a método get
    //console.log(wolverine.fullName);

    // Usando método set
    wolverine.fullName = 'Fer';
    //console.log(wolverine.fullName);

})();