// Or we could go a bit further
'use strict'

let person = {name: 'Ed', job: 'cowboy coder'};

displayPerson(person);

function displayPerson({name, job}) {
    console.log(name);
    console.log(job);
}

// Our display person function is now only responsible for displaying the person
// It does not need to pull the object apart!