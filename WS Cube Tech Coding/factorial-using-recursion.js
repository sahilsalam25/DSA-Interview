function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(30));
let n = 4;
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(n));
