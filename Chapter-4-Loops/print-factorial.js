// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

// M1---using loop
let num = 20;
let fact = 1;
// for (let i = 1; i < num; i++) {
// above using i <= num; used  i < num ... just minor mistake but answer is totally wrong thats why take care of every small things...
// for (let i = 1; i <= num; i++) {
//     fact *= i;
// }
// console.log(`factorial of ${num} is =`, fact);

// let n = 20;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log(`factorial of`, n, `is :`, factorial);

// M2 using recursion
function factorial_(n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return (n) * factorial_(n - 1);

}
console.log('factorial of 3...', factorial_(3));
;