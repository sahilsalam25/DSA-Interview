// The apply() method in JavaScript is a function method available for all JavaScript functions. It allows you to call a function with a specified this value and an array or an array-like object containing the arguments to be passed to the function.

// Here's a more structured definition:

// Syntax:


// functionName.apply(thisArg, [argsArray])
// Parameters:

// functionName: The function to be called.
// thisArg: The value to be passed as this when calling the function. If null or undefined, the global object is used as this.
// argsArray: An array or array-like object containing the arguments to be passed to the function. If not an array-like object, it will be converted to an array.
// Return Value:
// The result of calling the function with the specified this value and arguments.

// Important...!

// The apply() method is similar to the call() method, but it accepts arguments as an array instead of as individual arguments.
//Example-1---
function Greet(age, city,) {
    return 'Hello, ' + 'This is ' + this.name + ' ' + age + 'from ' + city;
}
let NAME = {
    name: 'Sahil'
}
console.log(Greet.apply(NAME, [24, 'Nawada']));

//Example-2---Sum
function sum(a, b) {
    return a + b;
}

const numbers = [1, 2];

const result = sum.apply(null, numbers);
console.log(result); // Output: 3
// Expalnation...
//   In this example, we have a sum function that takes two arguments. We create an array numbers containing the arguments to be passed to the sum function. Then, we use the apply() method to call the sum function with null as the this context and numbers as the array of arguments.

//Example-3---greet(greeting)
function greet(greeting) {
    return greeting + ', ' + this.name;
}

const person = {
    name: 'Sahil'
};

const args = ['Hello']; // Array containing the greeting argument

const greeting = greet.apply(person, args);
console.log(greeting); // Output: Hello, Sahil
// In this example, we have a greet function that takes a greeting argument. We use the apply() method to call the greet function with person as the this context and args as an array containing the greeting argument.

// The apply() method is particularly useful when you have an array of arguments or when you want to dynamically pass arguments to a function.

//More Methods...
// Using apply() with Math Methods:

const Numbers = [1, 2, 3, 4, 5];

const maxNumber = Math.max.apply(null, Numbers);
console.log(maxNumber); // Output: 5

const minNumber = Math.min.apply(null, Numbers);
console.log(minNumber); // Output: 1
// In this example, we use the apply() method to find the maximum and minimum values in an array of numbers by applying the Math.max and Math.min functions, respectively.

// Using apply() with Array Methods:

const numbers_ = [1, 2, 3, 4, 5];

// Concatenating two arrays using apply
const newArray = numbers_.concat.apply(numbers_, [6, 7, 8]);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Here, we use the apply() method to concatenate two arrays (numbers and [6, 7, 8]) using the concat method of arrays.