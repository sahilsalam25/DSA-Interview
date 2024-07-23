// Method 1- find larget of number using js math function Math.max(c)
// let firstNum = 100;
// let secondNum = 20;
// let thirdNum = 25;
// let result = Math.max(firstNum, secondNum, thirdNum);
// console.log(`${(firstNum)}, ${(secondNum)} , ${(thirdNum)} -: The Biggest Number is : ${result}`);
// Method 2- find larget of number using js using logic :
function largestOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

console.log(largestOfThree(12, 2, 3));
// Method 3- chatgpt
// let numbers = [3, 7, 2, 8, 5];
// let largestNumber = Math.max(...numbers);

// console.log("The largest number is: " + largestNumber);
// Method 4. using loop
let numbers = [3000, 705, 265, 8, 5, 55];

let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}

console.log("The largest number is: " + largestNumber);
//M5
function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Example usage
const largestNumber1 = findLargest(10, 5, 8);
console.log("Largest number is :", largestNumber1);

// M6- foreach -Certainly! Here's another approach using the forEach method:
let numbers1 = [3, 7, 2, 8, 5];

let largestNumber2 = numbers1[0];

numbers1.forEach(function (number) {
    if (number > largestNumber) {
        largestNumber2 = number;
    }
});

console.log("The largest number is: " + largestNumber2);

