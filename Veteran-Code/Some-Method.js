// In JavaScript, the some() method is used to check if at least one element in an array passes a certain condition. It tests whether at least one element in the array passes the test implemented by the provided function. The method returns true if the callback function returns true for at least one element, otherwise, it returns false. Here are some examples:

// M1--- Checking if at least one element in an array is even:

let numbers = [1, 3, 5, 7, 8];

// Check if at least one number is even
let hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true, because 8 is even
// Verifying if at least one element in an array is greater than a certain threshold:
// M2--- Check if at least one score is greater than 90
let scores = [85, 90, 88, 92, 95];


let hasHighScore = scores.some(score => score > 90);
console.log(hasHighScore); // Output: true, because there are scores greater than 90

//M3--- Using some() with objects:

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 }
];

// Check if at least one student passed (grade >= 70)
let hasPassed = students.some(student => student.grade >= 70);
console.log(hasPassed); // Output: true, because at least one student passed

// M4---


let num1 = [10, 2, 3, 4, 55, 5]
let demo = num1.some((a, b, c, d) => {
    console.log('a =', a);
    console.log('b =', b);
    console.log('c =', c);
    // console.log('d =', d);
    return a == 2;
});
console.log('demo =', demo);