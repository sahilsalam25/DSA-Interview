// The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements, if any. The splice() method takes three parameters:

// Start index: The index at which to start changing the array. If negative, it will begin that many elements from the end of the array.
// Delete count: The number of elements to remove from the array. If set to 0, no elements will be removed.
// Items to add (optional): The elements to add to the array, starting from the start index.
//M1--- Here's how you can use the splice() method:
let numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 2 and replace them with 'a', 'b', and 'c'
let removedElements = numbers.splice(2, 2, 'a', 'b', 'c');

console.log(numbers); // Output: [1, 2, 'a', 'b', 'c', 5]
console.log(removedElements); // Output: [3, 4]
// splice(2, 2, 'a', 'b', 'c') starts removing elements from index 2, removes 2 elements (3 and 4), and adds 'a', 'b', and 'c' in their place.
// The modified array becomes [1, 2, 'a', 'b', 'c', 5].
// The removed elements (3 and 4) are returned as an array.


// M2--- You can also use splice() to simply remove elements without adding any:
let numbers1 = [1, 2, 3, 4, 5];

// Remove 3 elements starting from index 2
let removedElements1 = numbers1.splice(2, 3);

console.log(numbers1); // Output: [1, 2]
console.log(removedElements1); // Output: [3, 4, 5]
// M3---Adding elements to an array without removing any:
let numbers2 = [1, 2, 3, 4, 5];

// Insert elements 'a', 'b', and 'c' starting from index 2 without removing any elements
numbers2.splice(2, 0, 'a', 'b', 'c');

console.log(numbers2); // Output: [1, 2, 'a', 'b', 'c', 3, 4, 5]
// M3---Adding elements to an array without removing any:
let numbers3 = [1, 2, 3, 4, 5];

// Insert elements 'a', 'b', and 'c' starting from index 2 without removing any elements
numbers3.splice(2, 0, 'a', 'b', 'c');

console.log(numbers3); // Output: [1, 2, 'a', 'b', 'c', 3, 4, 5]
// M4---Removing elements from the end of an array:
let numbers4 = [1, 2, 3, 4, 5];

// Remove the last two elements from the array
let removedElements2 = numbers4.splice(-2);

console.log(numbers4); // Output: [1, 2, 3]
console.log(removedElements2); // Output: [4, 5]

// M5---Replacing elements without adding any new ones:
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Replace 'banana' with 'kiwi' at index 1
fruits.splice(1, 1, 'kiwi');

console.log(fruits); // Output: ['apple', 'kiwi', 'orange', 'grape']
// M6--- Removing elements using negative index:
let numbers_1 = [1, 2, 3, 4, 5];

// Remove the first two elements from the array
let removedElements_1 = numbers_1.splice(-5, 2);

console.log(numbers_1); // Output: [3, 4, 5]
console.log(removedElements_1); // Output: [1, 2]
// M7--- Removing elements from the middle of an array:
let Numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 2
let removedElements_3 = Numbers.splice(2, 2);

console.log(Numbers); // Output: [1, 2, 5]
console.log(removedElements_3); // Output: [3, 4]

// M8---Inserting elements at the beginning of an array:
let numbers_4 = [4, 5, 6];

// Insert elements 1, 2, and 3 at the beginning of the array
numbers_4.splice(0, 0, 1, 2, 3);

console.log(numbers_4); // Output: [1, 2, 3, 4, 5, 6]

// M9---Removing all elements from an array:
let numbers6 = [1, 2, 3, 4, 5];

// Remove all elements from the array
let removedElements5 = numbers6.splice(0);

console.log(numbers6); // Output: []
console.log(removedElements5); // Output: [1, 2, 3, 4, 5]
// M10--- Replacing a range of elements with a single element:

let colors = ['red', 'green', 'blue', 'yellow'];

// Replace 'green' and 'blue' with 'orange'
colors.splice(1, 2, 'orange');

console.log(colors); // Output: ['red', 'orange', 'yellow']
// Demo
let Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let demo1 = Array1.splice(Array1.length - 3, 1, -55);
// let demo1 = Array1.splice(Array1.length - 2, 2, 13, 15, 16);
let demo1 = Array1.splice(2, 7);
console.log('Array1 =', Array1);
// console.log('demo1', Array1.splice(Array1.length, 2, 11));
console.log('final 1 =', demo1);
let Array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let demo2 = Array2.slice(2, 9);
console.log('Array 2 =', Array2);
console.log('final 2 =', demo2);


