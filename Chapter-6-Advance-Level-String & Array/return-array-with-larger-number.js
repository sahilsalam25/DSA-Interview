// Qs1. Write a JavaScript function that returns Largest elements in the given array :
// let array = [1299999, 35, 65, 75, 556554, 640, 5550] // output :1299999
// let array = [11, 23, 55, 45] // output : 55
// function returnArray() {
//     let element = array[0];
//     for (let index = 0; index < array.length; index++) {

//         if (element <= array[index]) {
//             element = array[index]
//         }

//     }
//     return element;
//    // console.log(`element =`, element);
// }
// console.log(`Largest element in array =`, returnArray());

// Qs2. Write a JavaScript function that returns array elements larger than a number :
// M1----------
// let arr = [10, 5, 6, 7, 8, 2, 3, 11, 12, 9]
// let number = 5;
// // return  number from array which is greater then 5:
// function largestNumber() {
//     arr.filter((num) => {
//         // console.log(`before`, num);
//         console.log(`number > 5 =`, num, '=>', num > 5);
//         // if (num > 5 == 'true') {
//         //     console.log(`number > 5 =`, num, '=>', num > 5);
//         //     return true;
//         //     //     console.log('sahil');
//         // }
//         // console.log('123-sahil');
//         // return num > 5;
//         // console.log(`after`, num);
//     })
//     // console.log(num);
// }
// // largestNumber();
// // largestNumber();
// // largestNumber();
// console.log(`-----------`, largestNumber());
// Qs2. Write a JavaScript function that returns array elements larger than a number :
// M2---
let arr = [10, 5, 6, 7, 8, 2, 3, 11, 12, 9]
let number = 5;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    // console.log('1st value', newArr);
    if (arr[i] > number) {
        // console.log('2nd value', newArr);
        newArr.push(arr[i]);
        // console.log('nth value', newArr);
    }
    // console.log('after if blcok value', newArr);
}
console.log('final value', newArr);


// M3---
// let arr = [8, 9, 10, 111, 2, 33, 4, 5, 6, 7];
let num = 5;
//elements larger than a number num
function getElements(arr, num) {
    console.log(`final value > 5 are given below :`);
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > num) {

            console.log(`final value > 5 =`, arr[i]);
            // return arr[i]; 
            // here we cant use return statement because return statement will only give 1st occurence i.e final value > 5 = 8.... it will npot execute the further array element 9,10,111, etc 
            // so that why here is used console.log it will print one by one all number which is > 5
        }

    }
}
getElements(arr, num);
// console.log(`final value > 5 =`, getElements(arr, num));

let s1 = [3, 504, 8755, 1111, 4];
let l1 = 0;
for (let i = 0; i < s1.length; i++) {
    if (s1[i] > l1) {
        l1 = s1[i];
    }
}
console.log('sahil largest number =', l1);