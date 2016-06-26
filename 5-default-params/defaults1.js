// The old way - verifying your params

function doSomething(a) {
    if(typeof a === 'undefined' || a === null) {
        a = 1;
    }
    //Do some actual work
}

// This sucks and makes are code noisey