// M1--- using %
let num1 = 255;
let num2 = 4855155;
console.log('-------', typeof num2.toString(), num2.toString().slice(-1));
if (num1 % 10 == num2 % 10) {
    console.log('last digit is same...');
}
else {
    console.log('last digit is not same');
}
// M2-----
// Approach 2: Converting Numbers to Strings
// Convert both numbers to strings using the toString() method.
// Get the last character (digit) of each string using the slice() method.
// Compare the last digits using the ===.
// Return true if the last digits are the same, otherwise return false.
// Syntax:
// string.slice(startIndex, endIndex);
// Example:


// Define function to check if two numbers have the same last digit
function haveSameLastDigit(num1, num2) {
    // Getting last digit using "toString" and "slice" methods
    const lastDigit1 = num1.toString().slice(-1);
    const lastDigit2 = num2.toString().slice(-1);

    // Return if last digits are same or not 
    return lastDigit1 === lastDigit2;
}

// Define two numbers
const number1 = 123;
const number2 = 453;

// Calling function with arguments 
const result = haveSameLastDigit(number1, number2);

// Output the result
console.log(result);
