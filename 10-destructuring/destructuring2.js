// The new way 
// Node 6 + only
'use strict'

let person = {name: 'Ed', job: 'cowboy coder'};

displayPerson(person);

function displayPerson(p) {
    let {name, job} = p;

    console.log(name);
    console.log(job);
}

// A lot less code to pull objects apart

// Is it more readable?