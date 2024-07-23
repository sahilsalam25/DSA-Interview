let unsortedArray = [2, 34, 200, 560, 12, 55, 250, 10, 5, 8, 4, 9, 20];
// this is a wrong method to sort a number:
console.log(unsortedArray.sort()); // it is sort using alphabet like- 1,2 ,3 4,5 but not a/c to value
// Method-1 Sorted array in ascending order:
const sortedArrayAsc = unsortedArray.sort((a, b) => {
    return a - b;
})
console.log(`Sorted Array in Ascending Order : [${sortedArrayAsc}]`);
// Method 2 ; Sorted array in Descending order:
const sortedArrayDesc = unsortedArray.sort((a, b) => {
    return b - a;
})
console.log(`Sorted Array in Descending Order :  [${sortedArrayDesc}]`);
// Method to sort a string value:
let strArray = ['sahil', 'amir', 'zakaur', 'barkat', 'imaad', 'salam', 'abdul'];
let sortedstrArray = strArray.sort();
console.log(`The Sorted Array are : [${sortedstrArray}]`);