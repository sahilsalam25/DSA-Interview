// In JavaScript, setInterval() is a method used to repeatedly execute a function or code snippet at specified intervals. Its syntax is as follows:

// Here's a simple example that demonstrates how to use setInterval() to log a message to the console every second:
function logMessage() {
    console.log("Interval executed !");
}

// Execute logMessage() every second (1000 milliseconds)

// setInterval(logMessage, 1000);

// This will continuously log "Interval executed!" to the console every second until you stop the interval. To stop the interval execution, you can use clearInterval() method, passing it the interval ID returned by setInterval(). 
// For example: use clearInterval() method to stop execution:
var Id = setInterval(logMessage, 500);

// Stop the interval after 5 seconds
setTimeout(function () {
    clearInterval(Id);
}, 5000);
// In this example, the clearInterval() method is called after 5 seconds, effectively stopping the interval execution.

//------ Another Example:
// Write a program that prints "Hello World" 5 Times at the interval of 2 Seconds:
let id = setInterval(() => {
    console.log("Hello World");
}, 2000)
setTimeout(() => {
    clearInterval(id);
    console.log('"Hello World" executed 5 Times, Interval executed ! ');
}, 10000); // 1000 ms(mili-second) = 1 second
// Another Example that will print sum after some second:
function sum(a, b) {
    console.log('Sum = ', a + b);
}
let timerId = setTimeout(sum, 200, 2, 3);
let timerId1 = setTimeout(sum, 200, 20, 3);
let timerId2 = setTimeout(sum, 200, 21, 3);
// clearInterval(timerId);
// clearInterval(timerId1);
// clearInterval(timerId2);

// setInterval to print current time:

function printTime() {
    let time = new Date().toLocaleTimeString();
    console.log(`Current Time is : ${time}`);
}
let newTimerId = setInterval(printTime, 1000); // it will print every 1000 ms i.e 1 second:
setTimeout(function () {
    clearInterval(newTimerId);
    console.log(`Over....`);
}, 15000)
