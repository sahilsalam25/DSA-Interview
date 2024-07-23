// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
// M-1
let number = '0123334544678';
let count = 0;
console.log('Length of number =', number.length);
for (let i = 0; i < number.length; i++) {
    if (i < number.length) {
        count++;
    }
    console.log('Count =', count);

}


// M2--
// function counting(number) {
//     let count = 0;
//     for (let n = number; n > 0; n = Math.floor(n / 10)) {
//         console.log('initial', n);
//         count++;
//         console.log('before', n);
//         console.log(count);
//         console.log('after', n);
//     }
//     // console.log(count);
//     return count;
// }

// let num = 123;
// console.log(Math.floor(num / 10));
// let result = counting(num);
// console.log(`Number of digits in ${num} :`, result);

// M3---

// let number = 1234567787;
// let count = 0;
// let copy = number;
// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(`Number of digits in ${number} is :`, count);
