// What the compiler ACTUALLY did...

var bar = undefined;

function foo() { 
}

bar = function() {

}

/* Our function declaration has been hoisted
   
   Our function declaration NAME was hoisted, but the function wasn't assigned to the variable until later */