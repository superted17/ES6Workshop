// But remember, the hoisting IS function scoped:

var a = 1;

function run() {
    var a = 2;
    console.log(a);
}

run();

console.log(a);

/* var a inside of function is isolated from the other var a
   remember, this is the pre ES6 functionality */