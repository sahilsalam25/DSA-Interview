
// wap to find square root of given number:
// To find the square root of a number in JavaScript, we can use the built-in Math.sqrt() method. Its syntax is:

// Math.sqrt(number);
// M1----- Using  Math.sqrt(number);
let a = 16;
let sqrtofa = Math.sqrt(a);
console.log('Square root of', a, 'is =', sqrtofa);
let a1 = 36;
let sqrtofa1 = Math.sqrt(a1);
console.log('Square root of', a1, 'is =', sqrtofa1);
// M2-----
const num1 = 25;
const num2 = -120;
const num3 = 'Sahil';

// Math.pow() function returns the 
// square root of number 
console.log('Square Root of ' +
    num1 + ' is ' + Math.pow(num1, 1 / 2));

// Math.pow() function returns NaN, because 
// the passed value is negative integer 
console.log('Square Root of ' +
    num2 + ' is ' + Math.pow(num2, 1 / 2));

// Math.pow() function returns NaN, because 
// the passed value is string 
console.log('Square Root of ' +
    num3 + ' is ' + Math.pow(num3, 1 / 2));
console.log(Math.pow(4, 1 / 2));
console.log(Math.pow(9, 1 / 2));
console.log(Math.pow(16, 1 / 2));
console.log(Math.pow(25, 1 / 2));
console.log(Math.pow(30, 1 / 2));
console.log(Math.pow(251, 1 / 2));

console.log(Math.pow(125, 1 / 2));
