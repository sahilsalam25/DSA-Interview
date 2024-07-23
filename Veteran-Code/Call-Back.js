// Basic Js work as a synchronous but using callback we can make js as asnychronous

// What are Callbacks?

// A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.

// Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. This can lead to a poor user experience, as the program would appear unresponsive.

// Callbacks allow you to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation. This way, you can ensure that the program remains responsive and the user experience is not impacted.
//Example-1---

console.log('Statement 1.....');

setTimeout((a, b, c, d, e) => {
    console.log('Statement 2.....');
    console.log('a =', a);
    console.log('b =', b);
    console.log('c =', c);
    console.log('d =', d);
    console.log('e =', e);
}, 2000);


setTimeout(
    function (params) {
        console.log('parameter =', params);
        console.log('I am settimeout');
    }

    , 1500)
console.log('Statement 3.....');

// Example-2---Callback with array.forEach
// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use Array.forEach to loop through the array of numbers
    console.log('callback 1=', callback);
    let res1 = numbers.forEach(callback);
    console.log('res 1 =', res1);
}

// Define the callback function
function callbackFunction(number) {
    console.log('number 1 =', number);
    console.log("Result: " + number);
}
callbackFunction();
// Call the main function with the callback function
mainFunction(callbackFunction);

// Example...
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function () {
        const data = 'Some data fetched from server';
        // Call the callback function with the fetched data
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

function processData(data) {
    console.log('Processing data:', data);
}

// Call fetchData and pass processData as the callback
fetchData(processData);




