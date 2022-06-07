/**
 * Namespaces en TypeScipt
*/
namespace Validations {

    export const validateText = (text: string): boolean => {
        // forma corta
        return (text.length > 3) ? true : false; 

        /*
        Forma Larga
        if(text.length > 3){
            return true;
        }else{
            return false;
        }
        */
    };

    export const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };

}

console.log(Validations.validateText('Jean Carlo'));
console.log(Validations.validateDate(new Date()));