// Qs3. What is the output of the following code :
console.log('fetching data ...........');
const object = {
    message: 'Hello, World!',
    logMessage() {
        // console.log(this.message); 
        // output - undefined
        console.log(object.message);
    }
};
setTimeout(object.logMessage, 1400);
setTimeout(() => console.log('Data fetched'), 3700);
// Ans 3
// After a delay of 1 second, Hello, World! is logged to the console.
// While the setTimeout() function uses the object.logMessage as a callback, still,
//it invokes object.logMessage as a regular function, rather than a method.
// And during a regular function invocation this equals the global object,
// which is a window in the case of the browser environment.
// That's why console.log(this.message) inside logMessage method logs  window.message, which is undefined.