// Swapping variables
// You never have to do this, but...

'use strict'

var a = 1;
var b = 2;

// The old way:
//var temp = a, a = b, b = temp;

// The new:

[b, a] = [a, b];

console.log('a', a);
console.log('b', b);