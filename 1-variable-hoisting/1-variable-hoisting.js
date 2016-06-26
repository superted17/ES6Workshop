function outer() {
    a = 0;
    inner();

    function inner() {
        b = 2;
    }
}

outer();

/* 
   We're not expecting anything on screen, just want to see if this will blow up.

   In strict mode this would not have worked
    
   Add "use strict" to the top of this file to see what happens.

   We have not declared a or b, so why does this work when not in strict mode? */