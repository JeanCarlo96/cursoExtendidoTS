/**
 * Parámetros por Defecto en TypeScript
 */

(() => {

    // Parámetro Por defecto upper: toma valor de false si no lo mandan
    const fullName = (firstName:string, lastName?:string, upper:boolean = false):string => {
        if(upper){
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || '----'}`;
        }
    }

    const name = fullName('Tony', 'Stark', true);

    console.log({name});

})();