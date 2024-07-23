// The slice() method in JavaScript is used to extract a section of an array and returns a new array containing the extracted elements. It takes two parameters: the starting index (inclusive) and the ending index (exclusive) of the slice. If the ending index is not specified, the slice will continue to the end of the array. The original array is not modified. Here's how you can use the slice() method:

// M1---
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Extract a slice of fruits array from index 1 to index 3 (exclusive)
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ["banana", "orange", "grape"]

// If the ending index is not specified, slice continues to the end of the array
let slicedFruits2 = fruits.slice(2);
console.log(slicedFruits2); // Output: ["orange", "grape", "kiwi"]

// The original array remains unchanged
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
// In this example:

// fruits.slice(1, 4) extracts elements from index 1 (inclusive) to index 4 (exclusive), resulting in ["banana", "orange", "grape"].
// fruits.slice(2) extracts elements starting from index 2 until the end of the array, resulting in ["orange", "grape", "kiwi"].

// VVI-:     // Remember that slice() doesn't mutate the original array; it returns a new array with the extracted elements.


// Sure, here are some simpler examples of using the slice() method:
// M2---
// Extracting a portion of an array:

let numbers1 = [1, 2, 3, 4, 5];

// Extracting the first three elements
let slicedNumbers = numbers1.slice(0, 3);
console.log(slicedNumbers); // Output: [1, 2, 3]

let originalArray = [10, 20, 30, 40, 50];

// Creating a copy of the original array
let copiedArray = originalArray.slice();
console.log(copiedArray); // Output: [10, 20, 30, 40, 50]
// M4--- Extracting a single element:

let colors = ["red", "green", "blue", "yellow"];

// Extracting the second element
let color = colors.slice(1, 2);
console.log(color); // Output: ["green"]
// M5---Extracting elements from the end of an array:

// let numbers = [1, 2, 3, 4, 5];

// // Extracting the last three elements
// let lastThree = numbers.slice(-3);
// console.log(lastThree); // Output: [3, 4, 5]
let numbers = [1, 2, 3, 4, 5];

// Extracting the last two elements (M1)
let lastTwo = numbers.slice((numbers.length - 2));
// Extracting the last three elements (M2)
let LastThree = numbers.slice(-3);

console.log('Last Two ---', lastTwo);
console.log('Last Three ---', LastThree);
// console.log('Original Numbers =', numbers);
console.log('Demo Slice', numbers.slice(0, 4));
let demo2 = numbers.slice((a, b) => {
    console.log('a =', a);
    console.log('b =', b);
})
console.log('Demo 2 =', demo2);