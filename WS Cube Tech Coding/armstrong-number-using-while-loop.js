// function isArmstrongNumber(number) {
//     let sum = 0;
//     let temp = number;
//     console.log('temp =', temp);
//     const numDigits = number.toString().length;

//     while (temp > 0) {
//         const digit = temp % 10;
//         console.log('digit =', digit);
//         sum += Math.pow(digit, numDigits);
//         console.log('power =', Math.pow(digit, numDigits));
//         console.log('sum =', sum);

//         temp = Math.floor(temp / 10);
//         console.log('temp 2A=', temp);
//     }

//     return sum === number;
// }

// // Example usage
// const number = 153;
// if (isArmstrongNumber(number)) {
//     console.log(number, " is an Armstrong number.");
// } else {
//     console.log(number, " is not an Armstrong number.");
// }
// console.log(Math.pow(2, 4));
// console.log('1%10 =', 1 % 10);
// console.log('15/10 ->', 15 / 10);


// The Armstrong numbers of first kind up to 10 digits are 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051, 88593477, 146511208, 472335975, 534494836, 912985153, and 4679307774.
//M2--------
function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;
    const numDigits = number.toString().length;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === number;
}

// Example usage
// const number = 153;
const number = 3;
if (isArmstrongNumber(number)) {
    console.log(number, " is an Armstrong number.");
} else {
    console.log(number, " is not an Armstrong number.");
}

// M3-------
function printArmstrongNumber(number) {


    let sum = 0;
    let temp = number;
    // console.log('temp 1', temp);
    let numDigits = number.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }
    if (sum == number) {
        console.log('Given number ->', number, 'is an armstrong number');

    }
    else {
        console.log('Given number ->', number, 'is not an armstrong number');
    }
}

printArmstrongNumber(155);
printArmstrongNumber(153);
printArmstrongNumber(1);
printArmstrongNumber(370);
printArmstrongNumber(5);