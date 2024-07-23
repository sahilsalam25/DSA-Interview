// M1--- 
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        console.log(Math.sqrt(number));
        console.log(i);
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Usage
const number = 7;
console.log(`${number} is prime:`, isPrime(number));

// M11---
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// const number1 = parseInt(prompt("Enter a number: "));
let number1 = 43;

if (isPrime(number1)) {
    console.log(number1, " is a prime number.");
} else {
    console.log(number1, " is not a prime number.");
}

// M2---
// Function to check prime number

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(15);
// M4-------
// Define a function named test_prime that checks whether a given number n is a prime number
function test_prime(n) {

    // Check if the number is equal to 1, which is not a prime number
    if (n === 1) {
        return false;
    }
    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
        return true;
    } else {
        // Iterate from 2 to n-1 to check for factors of n
        for (var x = 2; x < n; x++) {
            // If n is divisible by x without a remainder, it is not a prime number
            if (n % x === 0) {
                // console.log(n, " is not prime");
                return `${n} is not a Prime Number`;
            }
        }
        // If no factors are found, the number is a prime number

        return `${n} is  a Prime Number`;
    }

}

// Log the result of calling test_prime with the input number 37 to the console
console.log(test_prime(10));

// test_prime(15);
// test_prime(16);