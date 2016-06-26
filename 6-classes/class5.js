// Extending

'use strict'

class Person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
}

class Student extends Person {
    constructor(name) {
        super(name, 'student');
    }
}

var ed = new Student('Ed');

console.log(ed.job);