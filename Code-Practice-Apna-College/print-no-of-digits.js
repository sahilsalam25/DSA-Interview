// function counting(number) {
//     let count = 0;
//     for (let n = number; n > 0; n = Math.floor(n / 10)) {
//         count++;
//     }
//     return count;
// }

// let num = 123456789;
// let result = counting(num);
// console.log(`Number of digits in ${num} : ${result}`);
function sum(a, b) {
    return a + b;
}
console.log('The Value of Sum is : ' + sum(10, 20));
// Square root
function squareRoot() {

    return Math.sqrt(81);
}
console.log(`Square Root of 9 is : `, squareRoot());
// Swap of two Numbers:
let a = 5;
let b = 10;
let swap = '';
console.log('Before Swap ---------------')
console.log(`The Value of a is : ${a} & Value of b is : ${b} Value of Swap is : ${swap}`)

//Method-2
a = a + b;
b = a - b;
a = a - b;
//Method-1
// swap = a;
// a = b;

// b = swap;
console.log('After Swap ---------------')
console.log(`The Value of a is : ${a} & Value of b is : ${b} Value of Swap is : ${swap}`)