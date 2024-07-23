// The async and await keywords in JavaScript provide a way to work with asynchronous operations in a more readable and maintainable manner. They are syntactic sugar over Promises and make it easier to write asynchronous code that looks and behaves like synchronous code.

// async Function
// An async function is a function that returns a Promise. It allows you to use await within it to pause execution until the Promise is resolved.

// Syntax

// async function myFunction() {
//   // Code that may include await expressions
// }
// await Expression
// The await keyword is used to wait for a Promise to resolve. It can only be used inside an async function. When the await expression is called, it pauses the execution of the async function until the Promise settles (either resolves or rejects).

// Syntax

// let result = await somePromise;
// Example
// Here’s an example that demonstrates how to use async and await:


function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "Sahil Salam" }; // Simulated fetched data
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    try {
        console.log("Fetching data...");
        let data = await fetchData('https://api.example.com/data');
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();
// In this example:

// fetchData is a function that returns a Promise that resolves after 1 second.
// getData is an async function that uses await to wait for fetchData to resolve. The try...catch block is used to handle any potential errors.


// Example---
console.log('before set timeout');
setTimeout(() => {
    console.log('6');
}, 1000)
console.log('after set timeout');

async function test() {
    try {
        await console.log('1');
        await console.log('2');
        await console.log('3');
        console.log('...');
        console.log('---2');
    }

    catch (error) {
        console.log('error =', error);
    }
}
test();
console.log('4');


console.log('5');

// Explanation

// How async/await Works
// The async/await syntax is a special syntax created to help you work with promise objects. It makes your code cleaner and clearer.

// When handling a Promise, you need to chain the call to the function or variable that returns a Promise using then/catch methods.

// When you have many promises, you will also need lots of then method chains. For example, here's how you might retrieve data using the fetch() function:

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));
// A Typical Fetch API Implementation
// In the code above, the fetch() function returns a Promise, which we handle using the then() method. Inside the first then() method, we accept the response from the request and convert it into an object using the json() method.

// In the second then() method, we receive the returned json data from the call to the json() method, then log that data to the console.

// We also add the catch() method to handle any error that might happen when running the request.

// The code is really not hard to understand, but we can make it even prettier by removing the .then() and .catch() chains, which also removes the callback functions.

// The Await Keyword
// The await keyword basically makes JavaScript wait until the Promise object is resolved or rejected. Instead of having to use the callback pattern inside the then() method, you can assign the fulfilled promise into a variable like this:

// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await response.json();
// console.log(json)
// Using Await in place of .then() method chaining
// The await keyword is placed before the call to a function or variable that returns a promise. It makes JavaScript wait for the promise object to settle before running the code in the next line.

// Now if you run the code above, you might get an error like this:

// SyntaxError: await is only valid in async functions and the top level bodies of modules


async function runProcess() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json)
}
console.log('fetching data...');
runProcess();