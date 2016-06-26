// Lexical scoping:

// 'this' - we've all found it confusing in javascipt and we've all been stung by it

// Copy and paste this into a browser:

var widget = {
    init: function() {
        document.addEventListener('click', function(event) {
            this.doSomething(event.type);
        }, false);
    },

    doSomething: function(type) {
        console.log('Handling ' + type + ' event');
    }
};

widget.init();

// How would you normally fix this?