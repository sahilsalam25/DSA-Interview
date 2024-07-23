// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// M1---
// let array=[1,2,3,4,5]
// const doubleAndReturnArgs=(array,2)=>{

// }

// const doubleAndReturnArgs = (arr, ...args) =>

//     [
//         // console.log(`1st line arr =`, arr),
//         console.log(`1st line args =`, args),
//         ...arr,
//         // console.log(`2nd line arr =`, arr),
//         console.log(`2nd line args =`, args),
//         ...args.map((v) => v * 2),
//         console.log(`final line args =`, args),
//         // console.log(`final arr =`, arr),
//     ];

// doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
// doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));
// M2---
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];
doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));