// Rules

var x;

x = () => {};      // No params - we must have brackets

x = (val) = {};    // One parameter - brackets, but are optional
//OR
x = val => {};     // One parameter - no brackets

x = (y, z) => {};  // Two or more params, need brackets

x = y, x => {};    // Nope.