// Arrow functions... or LAMBDAs for most other languages

// Also known as the "fat arrow" function (lifted from coffee script)

// Awesome in Javascript because...

// THEY PRESERVE LEXICAL SCOPE!

'use strict'

var fn1 = function() {
    return 1;
}

var fn2 = () => 2;

console.log(fn1());
console.log(fn2());