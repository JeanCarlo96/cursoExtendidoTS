(() => {

    type vehiculo = {
        carroceria: string,
        modelo: string,
        antibalas: true,
        pasajeros: number,
        disparar?: () => void
    };

    const batimovil: vehiculo = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4
    };

    const bumblebee: vehiculo = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar(){
            console.log('Disparando');
        }
    };

    type persona = {
        nombre: string,
        edad?: number,
        mutante: boolean
    };

    const villanos: persona[] = [{
        nombre: 'Lex Lutor',
        edad: 54,
        mutante: false
    },{
        nombre: 'Erick Magnus Lehnsherr',
        edad: 49,
        mutante: false
    },{
        nombre: 'James Logan',
        edad: undefined,
        mutante: true
    }];
    
    console.log(villanos);

    type heroe = {
        poder: string,
        estatura: number
    };

    type villano = {
        lider: boolean,
        miembros: string[]
    };

    const charles: heroe = {
        poder: 'psiquico',
        estatura: 1.78
    };

    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', "Psylocke", 'Angel']
    };

    console.log(apocalipsis);

    let mystic: (heroe | villano);

    mystic = charles;
    mystic = apocalipsis;

})()