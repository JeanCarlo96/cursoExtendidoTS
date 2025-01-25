(() => {

    const error = (message: string): (never | 1) => {

        if(false){
            throw new Error(message);
        }

        return 1;
    }

    error('Auxilio!!!!');
    console.log('Hola Mundo');

})()