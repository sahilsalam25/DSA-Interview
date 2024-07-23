// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
//Below is wrong method...
// let number = '451237840';
// let sum = 0;
// console.log(number.length);
// for (let i = 0; i <= number.length; i++) {
//     if (i <= number.length) {
//         sum += i;
//     }


// }
// console.log(sum);


// M1-----
// let number = 154;
// let sum = 0;
// let copy = number;
// while (copy > 0) {
//     console.log('initial copy', copy);
//     digit = copy % 10;
//     console.log('initial digit', digit);
//     sum += digit;
//     console.log('initial sum', sum);
//     copy = Math.floor(copy / 10);
//     console.log('final copy', copy);
// }
// console.log('final sum', sum);


//M2-----
// let number = 12345;
// let sum = 0;
// let copy = number;
// while (copy > 0) {
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum);

//M3--- Solved by me in new way +NUMBER[i] way i.e adding + to convert string to number form
let NUMBER = '045123780';
let sum = 0;
console.log('---', NUMBER.length);
for (let i = 0; i < NUMBER.length; i++) {
    // console.log('Sum 1 =', sum);
    // if (i < NUMBER.length) {
    sum = sum + +NUMBER[i];
    // here +NUMBER[i] conver string into  number

    // }
    // console.log('number ', typeof +NUMBER[i]);
    // console.log(+NUMBER[i]);
}
console.log('Sum  =', sum);

// Demo this is how string coverted into number in js...
console.log(+'1' + +'2', typeof +'1' + +'2');