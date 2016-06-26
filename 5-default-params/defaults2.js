'use strict'

//Partial support in Edge, FF, Chrome, Node 6+

function sayHello(name = 'World') {
    console.log("Hello", name);
}

sayHello('Ed');
sayHello('');
sayHello();
sayHello(undefined);

// You could also set your default param to be a call to another function