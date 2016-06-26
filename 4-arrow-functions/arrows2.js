// An arrow function without curly braces will implicitly return.

// If we add curly braces, we have to add a return statement:

'use strict'

var fn1 = () => {
    1;
};

var fn2 = () => {
    return 2;
};

console.log(fn1());
console.log(fn2());