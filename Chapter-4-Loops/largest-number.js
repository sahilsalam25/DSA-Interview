// Qs5. Find the largest number in an array with only positive numbers. 
// M1
let numbers = [1011, 3, 20006553, 499999, 55, 6500, 7, 65432]
let largestNumber = 0;
for (let i = 0; i <= numbers.length; i++) {
    if (largestNumber < numbers[i]) {
        largestNumber = numbers[i]
    }
}
console.log('largest number is =', largestNumber);

// M2-----
let arr = [2, 5555, 10, 4445, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log('largest number is =', largest);