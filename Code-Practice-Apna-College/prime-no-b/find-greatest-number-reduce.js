let numbers = [1, 2, 3, 4, -5, 5, 40, 7, 41, 50, 9, -5, -50, 55];
// Program to check Biggest Value:
let result = numbers.reduce((prevVal, currVal) => {
    if (prevVal < currVal) {
        return currVal
    }
    else {
        return prevVal;
    }
});
console.log(`The Biggest Value [${numbers}] is :`, result);
