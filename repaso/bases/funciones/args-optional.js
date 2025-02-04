"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'Last Name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
