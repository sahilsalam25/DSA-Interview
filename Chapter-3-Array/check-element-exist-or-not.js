// M1---
// let arr1 = ['a', 'b', 'c','i']
// let checkArr = arr1.indexOf('b');
// console.log('--------', checkArr); // output =1

// if (arr1.indexOf('S') != -1) {
//     console.log('element is present in array', arr1);
// }
// else {
//     console.log('element is not present in array', arr1);
// }

// M2---
// const animals = ['dog', 'cat', 'bird', 'rabbit', 'lion'];

// // Check if 'cat' is in the array using includes()
// if (animals.includes('lion')) {
//     console.log('Cat is present in the array!');
// } else {
//     console.log('Cat is not present in the array.');
// };


// M3---
const fruits = ['apple', 'banana', 'orange'];
if (fruits.indexOf('banana') == 1) {
    console.log('true----');
}
// Output: 1
if (fruits.indexOf('grapes')) {
    console.log('false----');
}
// Output: -1
let arr = ["hello", 'a', 23, 64, 61, 99, -6];
let item = 61;
console.log(arr.indexOf(item));
if (arr.indexOf(item) !== -1) {
    console.log(item, "element exists in array", arr);
} else {
    console.log(item, "element doesn't exist in array", arr);
}

