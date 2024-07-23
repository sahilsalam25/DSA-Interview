// Approach 3: using recursion
// As we know that the nth Fibonacci number is the summation of n-1 and n-2 term and the n-1 term is the summation of n-2 and n-3 terms. So, to get the nth Fibonacci term we can follow fib(n)=fib(n-1)+fib(n-2) fib(n)=fib(n-2)+fib(n-3)+fib(n-3)+fib(n-4) …. fib(n)=fib(1)+fib(0)+fib(1)+fib(0)+fib(1)+fib(0)….fib(1)+fib(0) [terms containing sum of fib(1) and fib(0) fib(1)=0 fib(2)=1

// Example: This example shows the use of the above approach.
// Explanation-------
// fib(1) = 0
// fib(2) = 1
// fib(3) = fib(2) + fib(1)
// fib(4) = fib(3) + fib(2)
// fib(5) = fib(4) + fib(3)
// ...
// fib(n) = fib(n-1) + fib(n-2)

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): Using Recursion =", fibonacci(5));
console.log("Fibonacci(8): Using Recursion =", fibonacci(8));

