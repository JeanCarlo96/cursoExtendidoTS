/**
 * Clases en TypeScript
 */
(() => {
    class Avenger {
        /*
        Forma larga

        private name:string;
        public team:string;
        public realName?:string;
        static avgAge:number = 35;

        constructor(name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        */

        static avgAge:number = 35;
        static getAvgAge(){
            // El this tiene acceso a atributos propios de la clase
            // No de una instancia en específico
            // Por eso al imprimir nos sale Avenger, que es el nombre de la clase
            // Y no Antman
            return this.name;
        }

        constructor(
            private name:string, 
            public team:string, 
            public realName?:string){}
            
            // si no se pone nada es público
            public bio() {
                return `${this.name} (${this.team})`;
            }

    }


    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    //console.log(antman);

    // Consulta de un atributo publico
    //console.log(antman.realName);
    // Accediendo a un atributo static
    //console.log(Avenger.avgAge);

    // Llamada a un método
    //console.log(antman.bio());

    // Llamando a un método static
    //console.log(Avenger.getAvgAge());


})();