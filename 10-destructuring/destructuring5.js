// Brace on the left means I need to have an object on the right!

// If the property isn't available, it will be assigned an undefined value

'use strict'

let person = {name: 'Ed', job: 'cowboy coder'};

displayPerson(person);

function displayPerson(p) {
    let {name, job, address} = p;

    console.log(name);
    console.log(job);
    console.log(address);
}