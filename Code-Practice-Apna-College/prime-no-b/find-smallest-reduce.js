let numbers = [1, 2, 3, 4, -5, 5, 40, 7, 41, 50, 9, -5, -50, 55];
// Program to check Biggest Value:
let res = numbers.reduce((prevVal, currVal) => {
    if (prevVal < currVal) {
        return prevVal
    }
    else {
        return currVal;
    }
});
console.log(`The Smallest Value [${numbers}] is :`, res);
