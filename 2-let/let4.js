'use strict'

let a = 0;

if(true) {
    let a = 2;
    console.log("if block: a =", a); // 2 gets logged
}

console.log("at the end: a =", a); // 0 gets logged

/* This is suddenly behaving as expected! */

/* Writing JS on the server? Use let! */

/* Supporting only modern browsers? Use let! */