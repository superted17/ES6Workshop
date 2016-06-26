'use strict'

let a = 0;

if(true) {
    let a = 2;
    console.log("if block: a =", a); // What gets logged?
}

console.log("at the end: a =", a); // What gets logged?