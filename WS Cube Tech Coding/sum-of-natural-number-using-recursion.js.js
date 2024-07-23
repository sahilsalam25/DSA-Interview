
// M1-------
function usingrecursionsum(number) {
    if (number < 0) {
        return 0;
    }

    return number + usingrecursionsum(number - 1);

}
console.log('using recursion sum =', usingrecursionsum(10));
//M2------
function sumOfNaturalNumbers(n) {
    // Base case: If n is 0, return 0
    if (n === 0) {
        return 0;
    }
    // Recursive case: Add n to the sum of natural numbers from 1 to n-1
    else {
        return n + sumOfNaturalNumbers(n - 1);
    }
}

// Example usage
const n = 10;
const sum = sumOfNaturalNumbers(n);
console.log("Sum of first ", n, " natural numbers is: ", sum);
