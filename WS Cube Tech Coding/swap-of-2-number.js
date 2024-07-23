// M1--- using a temp variable...
let a = 55;
let b = 11;

let temp = a;
console.log('before swap a =', a, 'before swap b =', b);
a = b;
console.log('1 a =', a, '1 b =', b);
b = temp;
console.log('2 a =', a, '2 b =', b);
console.log('final value of a =', a);
console.log('final value of b =', b);
// M2--- without using temp 
let a1 = 150;
let b1 = 215;
console.log('before swap a1 =', a1, '& b1 =', b1);
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log('after swap a1 =', a1, '& b1 =', b1);

// M3-----
// Using es6(ES2015) Destructuring assignment
//JavaScript program to swap two variables

//take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

//using destructuring assignment
let a2 = 41;
let b2 = 35;
// Explanations....
// The crucial part is [b, a] = [a, b];. This line is using array destructuring assignment.
// On the right side of the assignment ([a, b]), we have an array [a, b] containing the values of a and b respectively.
// On the left side of the assignment ([b, a]), we have another array [b, a]. What happens here is that the values on the right side are assigned to the variables on the left side, but in reverse order. So, b will receive the value of a, and a will receive the value of b.
// After this line executes, the values of a and b are swapped.
[a2, b2] = [b2, a2];

console.log(`The value of a2 after swapping: ${a2}`);
console.log(`The value of b2 after swapping: ${b2}`);