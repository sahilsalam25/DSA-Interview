
// let startNum = 2;
// let endNum = 15;
// // function checkNoOfPrimeNumber(number) {
// for (let i = startNum; i < endNum; i++) {
//     for (let j = 2; j < i; j++) {


//         if (i % j == 0) {
//             console.log(`Given Number ${i} is Not a Prime Number`)

//         }

//         else {
//             console.log(`Given Number ${startNum} is  a Prime Number`)
//         }
//     }
// }
// }
// console.log(checkNoOfPrimeNumber(15));
function checkOddEven(number) {
    for (let i = 1; i < number; i++) {
        if (number % 2 == 0) {
            return (`given number ${number} is Even Number`)
        }
        else {
            return (`given number ${number} is Odd Number`)
        }
    }
}
console.log(checkOddEven(5));
