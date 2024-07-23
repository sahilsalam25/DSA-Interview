const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Method-1 to check odd or even in given arr:
function isOdd(num) {
    return num % 2 !== 0;
}
const output = arr.filter(isOdd); // Higher order function example... here isOdd is passing as a argument .
console.log(`Using Normal functions Odd Number's in the given Array are :`, output);
//Method 1-A...we can directly pass whole isOdd function in filter ():

const output1A = arr.filter(function isOdd(num) {
    return num % 2 !== 0;
}); // Higher order function example... here isOdd is passing as a argument .
console.log(`Passing direct isOdd function in filter()--- Odd Number's in the given Array are :`, output1A);
//Method-2 to check odd Numbers in given arr:
// function isOdd1(num1) {
//     return num1 % 2;
// }
const output1 = arr.filter((num1) => {
    return num1 % 2 !== 0;
}
);
console.log(`Using Arrow function : Odd Number's in the given Array are :`, output1);
//Method-1 to check  even NUmbers in given arr:
function isEven(n) {
    return n % 2 == 0;
}
const finalValue = arr.filter(isEven);
console.log(`Using Normal functions Even Number's in the given Array are :`, finalValue);
//Method-2 to check odd Numbers in given arr:
// function isOdd1(num1) {
//     return num1 % 2;
// }
const finalValue1 = arr.filter((n1) => {
    return n1 % 2 === 0;
}
);
console.log(`Using Arrow function : Odd Number's in the given Array are :`, finalValue1);
// To Print value greater than 5:
const printGrtrNum = arr.filter((grtNum) => {
    return grtNum > 5;
}
);
console.log(`Using Arrow function : Greater then 5 Number's in the given Array are :`, printGrtrNum);
// To Print value less than 5:
const printLwrNum = arr.filter((lwrNum) => {
    return lwrNum < 5;
}
);
console.log(`Using Arrow function : Lower then 5 Number's in the given Array are :`, printLwrNum);
// Method 1- no need to write return if single statement is return
const printLwrNum1A = arr.filter((lwrNum) => lwrNum < 5);
console.log(`Without return statement Using Arrow function : Lower then 5 Number's in the given Array are :`, printLwrNum1A);