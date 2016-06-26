// Functions hoist as well, but in different ways depending on how they are declared

console.log(typeof foo);
console.log(typeof bar);

// Function Declaration
function foo() {
}

// Function Expression
var bar = function() {
}