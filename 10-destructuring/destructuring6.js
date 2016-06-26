// Arrays
// Something your colleagues will hate you for doing:

'use strict'
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [first, second,,,,,,,,tenth] = nums; // Don't get caught up on the names, they are arbitrary

console.log(first, second, tenth);