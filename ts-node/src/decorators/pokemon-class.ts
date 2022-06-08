/**
 * Clase Pokemon
 */

// Decorador con función tradicional
function printToConsole(constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if(print) {
        return printToConsole;
    } else{
        return () => {};
    }
};

// Creación de decorador para bloquear un prototipo
const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

// Decorador que verifique que un valor esté en cierto rango de valores
function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //descriptor.value = () => console.log('Hola Mundo');
        console.log({target, propertyKey, descriptor});

        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if(id < 1 || id > 800){
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            }else{
                return originalMethod(id);
            }
        };
    };
}

// Decorador para bloquera que un atributo sea solo de lectura
function readOnly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string){
        //console.log({target, propertyKey});
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Fernando';
            },
            set (this, val){
                //console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        };

        return descriptor;
    };
}

//@printToConsole
@printToConsoleConditional(false)
@bloquearPrototipo
export class Pokemon {

    @readOnly(true)
    public publicApi: string = 'https://pokeapi.co';
    
    constructor(
        public name:string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon guardado en DB ${id}`);
    }

}