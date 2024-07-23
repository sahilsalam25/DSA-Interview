// In JavaScript, setTimeout() is a method used to execute a function or code snippet after a specified delay. Its syntax is as follows:
let msg1 = 'Hi There !';
console.log(msg1);
setTimeout(() => {
    let msg3 = 'Sahil Salam';
    console.log(msg3);
}, 2000)
let msg2 = 'This is '
console.log(msg2);
// another example:
// Here's a simple example that demonstrates how to use setTimeout() to log a message to the console after a delay of 3 seconds:
function logMessage() {
    console.log("Message logged after 3 seconds!");
}

// Execute logMessage() after a delay of 3000 milliseconds (3 seconds)
setTimeout(logMessage, 3000);
//   This will log "Message logged after 3 seconds!" to the console after waiting for 3 seconds.  

// Another Example
// We can also use setTimeout() to create a delay without executing a specific function by passing a function directly into it, like this:
// Execute an anonymous function after a delay of 2 seconds
setTimeout(function () {
    console.log("Delayed message! Print after 2 second");
}, 2000);

// setTimeout with setInterval:

function sum(a, b) {
    console.log(`sum = ${a + b}`);
}
let timerId = setInterval(sum, 2000, 3, 2);
setTimeout(() => {
    console.log(`${timerId} is Over`);
    clearInterval(timerId);
}, 5000)
