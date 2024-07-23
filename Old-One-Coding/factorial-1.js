// M1- Certainly! Here's a simple JavaScript program to calculate the factorial of a number using a recursive function:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// console.log('-----------');
// console.log(factorial(1));
// console.log('-----------');
// Example: Calculate the factorial of 5
let res = factorial(5);
console.log("Factorial of 5 using recursion is : ", res);

//------ M2
//Certainly! Here's another approach to calculate the factorial of a number using a for loop:

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example: Calculate the factorial of 5
let result = factorial(6);
console.log(`Factorial of 6 using for loop is : `, result);

// In this example, the factorial function uses a for loop to iterate from 1 to n, multiplying the current result by the loop variable at each iteration. This approach avoids the recursion and is often more memory-efficient for large values of n.
