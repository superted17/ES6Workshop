// or we could just use an arrow function...

'use strict'

var widget = {
    init: function() {
        document.addEventListener('click', (event) => {
            this.doSomething(event.type);
        }, false);
    },

    doSomething: function(type) {
        console.log('Handling ' + type + ' event');
    }
};

widget.init();

// We use this A LOT