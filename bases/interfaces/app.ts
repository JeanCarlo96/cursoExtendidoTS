// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar: () => void;
}

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

interface FuncionCiudadGotica {
  (parametros: string[]): number;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

const ciudadGotica: FuncionCiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona{

  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ){}

  imprimirBio(): void {
    console.log(`Hola soy ${this.nombre}, tengo ${this.edad} soy ${this.sexo} y estoy ${this.estadoCivil}`)
  }

}

const persona1 = new Persona('Jean Carlo', 26, 'hombre', 'soltero');
console.log(persona1);
persona1.imprimirBio();