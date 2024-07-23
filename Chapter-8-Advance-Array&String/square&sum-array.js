// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array... 
// M1-----
let array = [1, 2, 3, 4, 5];
const squareSum =
    array.map((num) => {
        return num * num;
    })

console.log(`Square numbers of given array ${array} =`, squareSum);

let finalSum =
    squareSum.reduce((prev, curr) => {
        console.log(`prev num =`, prev, 'curr num', curr, 'total => prev + curr =', prev + curr);
        return prev + curr;
    })
console.log('final sum =', finalSum);
console.log(`square sum =`, squareSum, typeof squareSum);
let average = finalSum / squareSum.length;
console.log(`The given array ${squareSum} sum = ${finalSum} & Average = `, average);

// M2-----
// let nums = [1, 2, 3, 4, 5];
// const square = nums.map((num) => num * num);
// console.log(square);
// let sum = square.reduce((acc, cur) => acc + cur, 0);
// console.log('sum-----------', sum);
// let avg = sum / nums.length;
// console.log(avg);


