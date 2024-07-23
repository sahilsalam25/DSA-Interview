// Example -1---
(function (name) {
    console.log(`Hello ${name}`);
})('Sahil');


// Example 2: Private Variables
// Using an IIFE to create private variables.

const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// Example 4: Passing Arguments
// Passing arguments to an IIFE.


(function (message, times) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
})("Hello, World!", 3);

// Output:
// Hello, World!
// Hello, World!
// Hello, World!