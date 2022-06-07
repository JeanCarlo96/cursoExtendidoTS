/**
 * Estructuras Complejas en TypeScript
 */
(() => {

    interface Client {
        name: string;
        age?: number;
        address?: Address;
        //getFullAddress(id: string): void;
        getFullAddress: (id: string) => void
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Jean Carlo',
        age: 26,
        address: {
            id: 125,
            zip: 'KY',
            city: 'Ottawa'
        },
        getFullAddress(id){
            return this.address.city;
        }
    };

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 125,
            city: 'Toronto',
            zip: 'K2S USA',
        },        
        getFullAddress(id){
            return this.address.city;
        }
    }

    console.log((client.age || 'No se ingresó la edad'));

})();