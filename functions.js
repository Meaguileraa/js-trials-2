"use strict";


// 1. isHometown

function isHometown(town) {

    return town === 'San Francisco';
}
console.log(isHometown('Oakland')) //false 
console.log(isHometown('San Francisco')) //true


// 2. getFullName

function getFullName(first, last) {

    return (`${first} ${last}`);
}
console.log(getFullName('Marissa', 'Aguilera'))



// 3. calculateTotal


function calculateTotal(price, state, tax=0.05) {
    const subtotal = price * (1 + tax); 
    let fee = 0;

    if (state === 'CA') {
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA') {
        fee = 2;
    }
    else if (state === 'MA') {
        if (price <= 100) {
            fee = 1;
        }
        else {
            fee = 3; 
        }
    }
    return subtotal + fee; 
}

console.log(calculateTotal(40, 'CA'))
console.log(calculateTotal(40, 'PA'))
console.log(calculateTotal(40, 'MA'))



// Define your function here
