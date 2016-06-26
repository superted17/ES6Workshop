'use strict'

let foo = 2;

if(true) {
    let bar = 1;
}

console.log(foo + bar); // This line blew up

/* Let was scoped inside of the if block, and is not accessible outside of it 
   Now, javascript is acting like a c like language
*/