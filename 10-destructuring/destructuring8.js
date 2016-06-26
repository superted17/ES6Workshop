'use strict'

let nums = [1, 2, 3, 4];

doSomething(nums);

function doSomething([first, second, ...others]) {
    console.log(first);
    console.log(second);
    console.log(others);
}

// Mind blown?