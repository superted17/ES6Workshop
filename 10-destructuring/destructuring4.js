// Let's have some default values:

'use strict'

let person = {name: 'Ed', job: 'cowboy coder'};
let emptyPerson = {};

displayPerson(emptyPerson);

function displayPerson({name = 'No name', job = 'jobless'}) {
    console.log(name);
    console.log(job);
}

// Brace on the left means I need to have an object on the right!

// If the object passed in does not have the expected properties, we will be assigned undefined