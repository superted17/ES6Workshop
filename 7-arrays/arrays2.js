'use strict'

// Spread operator - a slightly more practical example

let nums = [1, 2, 3];

let abcs = ['a', 'b', 'c'];

let alphanum = [...nums, ...abcs];

console.log(alphanum);

function getNums() {
    return [1, 2, 3];
}

let combinedNumbers = [0, ...getNums()];
console.log(combinedNumbers);

// Still only feels like a mild convenience