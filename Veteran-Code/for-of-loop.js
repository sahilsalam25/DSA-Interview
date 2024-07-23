// // In JavaScript, a for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It provides a concise and readable way to iterate over the elements of an iterable.

// // Here's the basic syntax of a for...of loop:
// // for (variable of iterable) {
// // code block to be executed
// // }
// // M1--- Iterating over a array:
// const array = [1, 2, 3, 4, 5];

// for (const element of array) {
//     console.log(element);
// }
// // M2--- Iterating over a string:
// const str = 'Hello';

// for (const char of str) {
//     console.log(char);
// }
// // M3--- Iterating over a map:
// const map = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
// ]);

// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`);
// }

// // M4--- Iterating over a set:
// const set = new Set([1, 2, 3, 4, 5]);

// for (const num of set) {
//     console.log(num);
// }
// // M5---Using for...of with arrays to calculate the sum of elements:
// // javascript
// // Copy code
// const Numbers1 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (const num of Numbers1) {
//     sum += num;
// }

// console.log('Sum:', sum);
// // M6 Iterating over the values of an object using Object.values():

// const obj = { a: 1, b: 2, c: 3 };

// for (const value of Object.values(obj)) {
//     console.log(value);
// }
// // Demo
// let Array = [211, 225, 325, 4444, 455, 53442, 1000];
// let Max = 0;
// for (let i = 0; i < Array.length; i++) {
//     if (Array[i] > Max) {
//         // console.log('Array[i]', Array[i]);
//         Max = Array[i];
//         // console.log('Max 1 =', Max);
//         // 

//     }
//     console.log('max 2', Max);
//     // return Max;


// }
// console.log('Maximum  using for loop=', Max);
// for (let num of Array) {
//     // console.log('num =', num);
//     // if (num > Max); {
//     if (num > Max) {
//         // console.log('Max if =', Max, 'num =', num);
//         Max = num;
//         // console.log('After Max 2 =', Max, 'num 2 =', num);
//         // break; // if we use break on the first condition it will come out of loop

//     }


// }
// // return Max;
// console.log('final Maximum =', Max);
// const numbers = [10, 5, 20, 8, 15];

// if (numbers.length === 0) {
//     console.log("Array is empty");
// } else {
//     let max = numbers[0]; // Assume first element as maximum

//     for (let num of numbers) {
//         if (num > max) {
//             max = num;
//         }
//     }

//     console.log("Maximum number:", max);
// }

// Reverse string using forof loop:
let Name1 = 'Sahil';
let rev = '';
for (let letter of Name1) {
    // rev = rev + letter; // it is minor mistake output not came
    rev = letter + rev;
    console.log('---', rev);
    // return rev;

}
console.log('reversed =', rev);
