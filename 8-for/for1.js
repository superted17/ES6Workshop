'use strict';

// For allows us to loop over anything iterable
let values = [10, 20, 30];

for (let value of values) {
    console.log(value);
}

// Why not just use EcmaScript's 5.1 feature, array.forEach?
values.forEach(function(value){
    console.log(value);
});

// Less c like, concerns about scope perhaps

// We can't break out of a forEach...
values.forEach(function(value){
    console.log(value);
    if(value === 20) {
        return; //Does nothing, a break statement is illegal
    }
});

// You could achieve the above with array.some, but it didn't feel like the right use


// But we can break out of a for...
for (let value of values) {
    console.log(value);
    if(value === 20) {
        break;
    }
}

// Can be applied to a string, array, set and few others