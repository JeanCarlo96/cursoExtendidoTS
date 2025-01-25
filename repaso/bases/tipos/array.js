"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    (villians.forEach(v => console.log(v.toUpperCase())));
    console.log(numbers);
})();
