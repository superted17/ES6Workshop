// Set properties

'use strict'

class person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    get hasJob() {
        return typeof this.job === 'string' && this.job.length > 0;
    }

    set hasJob(job) {
        if(!job) this.job = '';
    }
}

let ed = new person('ed', 'cowboy dev');
console.log(ed.hasJob);
ed.hasJob = false;
console.log(ed.hasJob);

// Can also call from inside the class - e.g this.hasJob = false;