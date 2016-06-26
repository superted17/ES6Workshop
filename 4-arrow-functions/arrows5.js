// Lexical scope...

// We could fix this by using bind...

var widget = {
    init: function() {
        document.addEventListener('click', (function(event) {
            this.doSomething(event.type);
        }).bind(this), false);
    },

    doSomething: function(type) {
        console.log('Handling ' + type + ' event');
    }
};

widget.init();



// or alias "this":

var widget = {
    init: function() {
        var me = this
        document.addEventListener('click', function(event) {
            me.doSomething(event.type);
        }, false);
    },

    doSomething: function(type) {
        console.log('Handling ' + type + ' event');
    }
};

widget.init();