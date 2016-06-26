// Get properties

'use strict'

class person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    get hasJob() {
        return typeof this.job === 'string' && this.job.length > 0;
    }
}

let ed = new person('ed');
console.log(ed.hasJob);

let nick = new person('nick', 'super dev');
console.log(nick.hasJob);