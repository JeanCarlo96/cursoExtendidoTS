(() => {

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'Last Name'}`;
    };

    const name = fullName('Tony');

    console.log({ name });

})()