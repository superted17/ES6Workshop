// What the compiler ran
var a = undefined;
var b = undefined;

function outer() {
    a = 0;
    inner();

    function inner() {
        b = 2;
    }
}

outer();