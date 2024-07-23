// In JavaScript, the every() method is used to check if all elements in an array pass a certain condition. It tests whether all elements in the array pass the test implemented by the provided function. The method returns true if the callback function returns true for every element, otherwise, it returns false. Here's an example:
// M1---
// Example 1: Using every() with arrow function
let numbers = [1, 2, 3, 4, 5];

// Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: false, because not all numbers are even

// Example 2: Using every() with a separate function
function isPositive(number) {
    return number > 0;
}

let numbers2 = [10, 20, 30, -5, 40];

// Check if all numbers are positive
let allPositive = numbers2.every(isPositive);
console.log(allPositive); // Output: false, because there's a negative number
// Explanation
// In Example 1, every() checks if all numbers in the array numbers are even. Since there's at least one odd number, allEven evaluates to false.

// In Example 2, every() checks if all numbers in the array numbers2 are positive using the isPositive function. Since there's a negative number in the array, allPositive evaluates to false.

// every() is useful when you need to validate if all elements in an array meet certain criteria before performing an action.
// M2---Checking if all elements in an array are strings:
let fruits = ["apple", "banana", "orange", "grape", '25'];

// Check if all elements are strings
let allStrings = fruits.every(item => typeof item === "string");
console.log('isAllString ?', allStrings); // Output: true, because all elements are strings
// M3--- Verifying if all elements in an array are greater than a certain threshold:
let scores = [85, 90, 88, 92, 95];

// Check if all scores are greater than 80
let allPassed = scores.every(score => score > 80);
console.log(allPassed); // Output: true, because all scores are greater than 80
//M4---Using every() with objects:


let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 }
];

// Check if all students passed (grade >= 70)
let allPassed1 = students.every(student => student.grade >= 70);
console.log(allPassed1); // Output: true, because all students passed
let num1 = [10, 2, 3, 4, 5]
let demo = num1.every((a, b, c, d) => {
    console.log('a =', a);
    console.log('b =', b);
    console.log('c =', c);
    // console.log('d =', d);
    return a < -2;
});
console.log('demo =', demo);