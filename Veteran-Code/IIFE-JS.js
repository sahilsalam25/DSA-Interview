// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a common design pattern used to create a local scope for variables, thereby preventing them from polluting the global scope.

// Syntax of an IIFE
// The syntax involves wrapping the function in parentheses to make it an expression, and then immediately invoking it with another pair of parentheses:


// (function () {
//     // Code to be executed immediately
// })();

// Or using an arrow function:
// (() => {
//     // Code to be executed immediately
// })();


// Example of async-await with IIFE
(function () {
    const promise = () =>
        new Promise((resolve, reject) => {
            const num = Math.random();
            console.log('Number =', num);
            if (num >= 0.5) {
                resolve("Promise is fulfilled!");
            } else {
                reject("Promise failed!");
            }
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log('some error =', error);
        })
    console.log(promise());
})()

// Why Use an IIFE?
// Avoiding Global Variables: Variables defined inside an IIFE are not accessible from the global scope, reducing the risk of variable name collisions.

// (function () {
//     // const secret = "I am a secret";
//     console.log('i am IIFE function...'); // Works fine
// })();

// console.log(secret); // ReferenceError: secret is not defined

// Example Passing Arguments to an IIFE
// You can pass arguments to an IIFE if needed:


// (function (name) {
//     console.log(`Hello, ${name}!`);
// })('Sahil');
// In this example, the IIFE takes a name parameter and logs a greeting.

// Conclusion
// IIFEs are a powerful and commonly used JavaScript pattern that helps in maintaining clean code, avoiding global scope pollution, and encapsulating functionality. They are particularly useful in scenarios where you want to create a new scope for variables and functions, ensuring they do not interfere with other parts of your code.

// Use Cases Of IIFE
// Avoid polluting the global namespace.
// To create closures in JavaScript.
// IIFE is used to create private and  public variables and methods.
// It is used to execute the async and await function.
// It is used to work with require function.
var counter = (function () {
    var count = 0;

    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    };
})();

// Increment the counter
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)
