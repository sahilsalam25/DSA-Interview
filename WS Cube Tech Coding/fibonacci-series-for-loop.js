// JavaScript Program to print Fibonacci Series
// Last Updated : 23 Apr, 2024
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.

// The sequence Fn of Fibonacci numbers is defined by the recurrence relation:

// Fn = Fn-1 + Fn-2 with seed values F0 = 0 and F1 = 1
//M1----------

let a = 0, b = 1;
console.log('Fibonacci Series...');
console.log(a);
console.log(b);
for (let i = 0; i <= 8; i++) {
    // a = b - a;
    // b = a + b;
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    // console.log(a + b);
}
// M2------
// Approach 1: Using for loop
// Example: This example uses for loop to print the Fibonacci series.
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5): ", fibonacci(5));
console.log("Fibonacci(8): ", fibonacci(8));
//M3---------
function fibonacci(num) {
    // x is representing the first term,
    // y is representing the second term, and
    // z is representing the sum of x and y.
    var x = 0;
    var y = 1;
    var z;
    var i = 0;
    for (i = 2; i < num; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return y;
}

var num = 7;
answer = fibonacci(num);

console.log("The 7th term of the Fibonacci series is: ", answer);
