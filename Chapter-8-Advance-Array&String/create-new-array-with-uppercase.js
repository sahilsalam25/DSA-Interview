// Qs3. Create a new array whose elements are in uppercase of words present in the original array...
// M1---
let array = ['sahil', 'salam'];
let str = 'sahil'

console.log(str, 'new str =', str.toUpperCase());
// let capitalArray = array.toUpperCase();
// console.log(capitalArray);
let arrayStr = array.toString();
// console.log('old array =', array);
// console.log('new value =', arrayStr);
// console.log('Capitalize =', arrayStr.toUpperCase());
// console.log('Capitalize in Array=', arrayStr.toUpperCase().split());
// console.log('Capitalize in Array=', Array.from(arrayStr.toUpperCase()));

// M2------
let strings = ["hi", , "world", "city", "hello"];
const upperString =
    strings.map((string) => {
        // console.log(string, typeof string);
        console.log(`Old array = ${string} \t New Array with Upper Case =`, string.toUpperCase());
    })

// console.log(upperString);
upperString;
