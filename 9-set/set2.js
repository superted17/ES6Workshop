'use strict';

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // This line does nothing. 2 is already present in the set.

console.log(mySet.has(1));

console.log(mySet.size);

mySet.delete(2);

console.log(mySet);
// Can also be looped through like arrays