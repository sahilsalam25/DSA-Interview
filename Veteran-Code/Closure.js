// Def-1--- 
// In JavaScript, closures are a powerful and often-used concept. A closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing. This allows for the preservation of state and the creation of private variables.
// Def-2---
// Closure in JavaScript

// Closures are a powerful and fundamental concept in JavaScript. They allow inner functions to access variables from their outer scope, even after the outer function has completed execution. In simpler terms, a closure “closes over” its lexical scope, preserving the variables and scope of the outer function. In this article, we’ll dive deep into closures, understand how they work, and explore practical examples.
// Def-3---
//What is a Closure?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.
// Example-1
function outerfunction() {
    let outerVariable = 'I am an Outer Variable...';
    function innerfunction() {
        console.log(outerVariable);
    }
    innerfunction();
    // return innerfunction;
}
outerfunction();
// let closure = outerfunction();
// closure();
// console.log(closure);
// Example-2---
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let closure = outerFunction();
closure(); // Output: "I am from the outer function"
// In this example, innerFunction has access to the outerVariable, even though it's declared outside of its scope. When outerFunction is called and executed, it returns innerFunction, creating a closure. The outerVariable is preserved within this closure, and innerFunction can access it even after outerFunction has finished executing.

// Closures are commonly used in JavaScript for creating private variables, encapsulating functionality, and implementing modules and factories. They are essential for understanding advanced JavaScript concepts and for writing clean and efficient code.

// Example-3---
function OUTER() {
    let name = 'Sahil';
    function INNER() {
        console.log('Name =', name);

    }
    name = 'Sahil Salam...';
    return INNER;
}
let result1 = OUTER();
result1();
// Example-4---
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// Example-5--- Certainly! Here's another simple example demonstrating closures:


function multiplier(x) {
    return function (y) {
        return x * y;
    };
}

let multiplyByTwo = multiplier(2);
let multiplyByThree = multiplier(3);

console.log(multiplyByTwo(5)); // Output: 10
console.log(multiplyByThree(5)); // Output: 15
// In this example, the multiplier function takes a parameter x and returns another function that takes a parameter y. The inner function forms a closure over the x parameter from the outer function. When multiplyByTwo is assigned the result of multiplier(2), it effectively creates a function that multiplies its argument by 2.

// Similarly, multiplyByThree multiplies its argument by 3. The closures capture the value of x from their respective calls to multiplier, allowing them to remember and use it when they are called later with another argument.
// Demo
console.log('Closure...');
function sum(a) {
    function result(b) {
        console.log('Sum =', a + b);

    }
    return result;
}
// sum(3);
let res = sum(2);
res(4);
// console.log('---', res(3));