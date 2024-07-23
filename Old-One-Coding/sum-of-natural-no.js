// Method 1- USing Recursion

function printSumOfNaturalNo(number) {
    if (number > 0) {
        return number + printSumOfNaturalNo(number - 1);
    }
    else {
        return number;
    }
}
let result = printSumOfNaturalNo(5);
console.log(result);
console.log(printSumOfNaturalNo(10));
// Method 2 Using loops:
let sum = 0;
let number;
function printSum(num) {
    for (let i = 0; i <= num; i++) {
        sum += i;

    }
    console.log('the Value of sum is : ', sum);
}
console.log(printSum(3));
// printSum(4);
// let res1 = printSum(5);
// console.log(res1);
