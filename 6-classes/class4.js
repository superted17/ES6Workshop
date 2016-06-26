// methods

'use strict'

class person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    study() {
        console.log(this.name + " is studying");
    }

    get hasJob() {
        return typeof this.job === 'string' && this.job.length > 0;
    }

    set hasJob(job) {
        if(!job) this.job = '';
    }
}

let ed = new person('ed');

ed.study();