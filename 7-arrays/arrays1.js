'use strict'

// Spread operator
// Node 5 plus only!

function flipTwo(a, b) {
    return [b, a];
}

let a = [1, 2, 3];

console.log(flipTwo(a[0], a[1]));

console.log(flipTwo(...a))
