// The old way

var person = {name: 'Ed', job: 'cowboy coder'};

displayPerson(person);

function displayPerson(p) {
    var name = p.name;
    var job = p.job;

    console.log(name);
    console.log(job);
}