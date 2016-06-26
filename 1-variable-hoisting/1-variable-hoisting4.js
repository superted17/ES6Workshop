var foo = 2;
var bar = undefined;

if(true) {
    bar = 1; // the compiler hoisted this for us upon execution. Thanks?
}

console.log(foo + bar);

/* Pre ES6, if blocks are just exection control.

   If blocks do not have their own scope.

   var declarations are hoisted to the top of the function.

   Things only become global if there is no var declaration at all, like in example 1 */