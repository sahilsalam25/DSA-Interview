// In JavaScript, the flat() method is used to flatten an array by a specified depth. By "flattening" an array, we mean converting a multi-dimensional array into a one-dimensional array. This method does not modify the original array; instead, it returns a new array with the elements flattened to the specified depth.

// Here's the syntax:
// array.flat(depth)
// array: The array you want to flatten.
// depth (optional): The depth level specifying how deep nested arrays should be flattened. The default value is 1.
// For example:


const multiDimensionalArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = multiDimensionalArray.flat();
console.log(flattenedArray);
// Output: [1, 2, 3, 4, [5, 6]]

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const flattenedDeepArray = deeplyNestedArray.flat(Infinity);
console.log(flattenedDeepArray);
// Output: [1, 2, 3, 4, 5]
// In the first example, calling flat() with no arguments flattens the array by one level. In the second example, flat(Infinity) flattens the array recursively to an unlimited depth.
// Certainly! Here are a few more examples of using the flat() method in JavaScript:

// Flattening a two-dimensional array:

const twoDimensionalArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray1 = twoDimensionalArray.flat();
console.log(flattenedArray1);
// Output: [1, 2, 3, 4, 5, 6]
// Flattening a multi-dimensional array with a specific depth:

const multiDimensionalArray1 = [1, [2, [3, [4, [5]]]]];
const flattenedArray2 = multiDimensionalArray.flat(2);
console.log(flattenedArray2);
// Output: [1, 2, 3, 4, [5]]
// Flattening an array with empty slots:

const arrayWithEmptySlots = [1, 2, , 3, 4];
const flattenedArray3 = arrayWithEmptySlots.flat();
console.log(flattenedArray3);
// Output: [1, 2, 3, 4]
// Flattening a sparse array:

const sparseArray = [1, , , 4, , 6];
const flattenedArray4 = sparseArray.flat();
console.log(flattenedArray4);
// Output: [1, 4, 6]
// Flattening an array of mixed data types:

const mixedArray = [1, 'hello', [3, 4], { name: 'John' }];
const flattenedArray5 = mixedArray.flat();
console.log(flattenedArray5);
// Output: [1, 'hello', 3, 4, { name: 'John' }]
// Remember, the flat() method creates a new flattened array and doesn't modify the original array.

// Demo 
let arrayNum = [1, 2, 3, [5, [6, 7], 8], 9, [10]];
let result = arrayNum.flat(Infinity);
console.log('original array =', arrayNum);
console.log('result array =', result);



