// currying is a technique in JavaScript that allows you to transform functions with multiple arguments into a sequence of functions, each taking one argument at a time. It promotes code reusability, composability, and flexibility.
// Why is currying useful in JavaScript?

// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable


// Example of sum Normal function
function sum(a, b, c) {
    return a + b + c;
}
let res = sum(2, 3, 5);
console.log('Sum =', res);
// Example of Currying 
function mul(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
console.log('Multiply using Currying =', mul(2)(3)(5));
// Same Example using Arrow function...
const Multiply = (a) => (b) => (c) => a * b * c;
console.log('Multiply Using Arrow function... =', Multiply(2)(3)(5));
// Example-2---
// Calculate the value of Volume using Normal function
function calculate_Volume(length, breadth, height) {
    return length * breadth * height;
}
console.log('Volume using Normal function...', calculate_Volume(4, 5, 6));
// Calculate the value of Volume using Currying function


function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log('Volume using Currying function...', calculateVolume(4)(5)(6));
// Important Example-
// JavaScript also provides built-in support for currying using the bind() method or arrow functions:

// Using bind()
const add = (x, y) => x + y;
const add5 = add.bind(null, 4);
console.log(add5(6)); // Output: 10

// Using arrow functions
const Add = x => y => x + y;
const Add5 = Add(6);
console.log(Add5(4)); // Output: 10
// In both examples, add5 is a curried function that adds 5 to its argument. You can see how currying can be useful for creating more flexible and reusable functions in JavaScript.
// Example--- String Concatenation:

function concatenate(str1, str2) {
    return str1 + ' ' + str2;
}

function curryConcatenate(str1) {
    return function (str2) {
        return str1 + ' ' + str2;
    };
}

const greet = curryConcatenate("Sahil,");
console.log(greet("Salam...")); // Output: Hello, world!
// Example---Power Function:

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function curryPower(base) {
    return function (exponent) {
        return Math.pow(base, exponent);
    };
}

const square = curryPower(2);
console.log(square(3)); // Output: 8