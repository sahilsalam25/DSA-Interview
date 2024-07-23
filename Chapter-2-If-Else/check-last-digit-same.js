// M1- wrong method
// let num1 = 325010;
// let num2 = 255202;
// num1 = num1.toString();
// console.log('num1 =', num1, typeof num1);
// num2 = num2.toString();
// console.log('num2 =', num2, typeof num2);
// console.log('...', num1.lastIndexOf());
// console.log('---', num2.lastIndexOf());
// if (num1.lastIndexOf() == num2.lastIndexOf()) {
//     console.log('its last digit is same');
// }
// else {
//     console.log('its last digit is not same');
// }

// M2 - good method
let num1 = 10;
let num2 = 478520;
if ((num1 % 10) == (num2 % 10)) {
    console.log("numbers have the same last digit which is",
        num1 % 10, ',', num2 % 10);
} else {
    console.log("numbers don't have the same last digit", num1 % 10, ',', num2 % 10);
}

//M3
// function lastDigitSame(num1, num2) {
//     // Convert numbers to strings
//     const strNum1 = num1.toString();
//     const strNum2 = num2.toString();

//     // Get the index of the last occurrence of '0' in each string
//     const lastIndexNum1 = strNum1.lastIndexOf('0');
//     const lastIndexNum2 = strNum2.lastIndexOf('0');

//     // Check if the last digits are the same
//     return lastIndexNum1 === lastIndexNum2;
// }

// // Example usage
// const num1 = parseInt(prompt("Enter the first number: "));
// const num2 = parseInt(prompt("Enter the second number: "));

// if (lastDigitSame(num1, num2)) {
//     console.log("The last digits are the same.");
// } else {
//     console.log("The last digits are different.");
// }


