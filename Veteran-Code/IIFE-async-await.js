// How to Use Async/Await in IIFE Functions
// An Immediately Invoked Function Expression (IIFE) is a technique used to execute a function immediately as soon as you define it.

// Unlike regular functions and variables, IIFEs will be removed from the running process once they are executed.

// Aside from the standard function, you can also make an asynchronous IIFE. This is useful when you need to run the asynchronous function only once:

(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
})();
console.log('fetching data.....');