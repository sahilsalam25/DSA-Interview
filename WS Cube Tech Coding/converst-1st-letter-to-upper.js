let str = 'sahil';
let firstletter = str.charAt(0);
let finalstr = firstletter.toUpperCase() + str.slice(1);
console.log(str);
console.log(firstletter);
console.log(finalstr);
//M2-----
// Approach 2 : Using ES6 spread syntax and join() method
// The spread syntax converts the string into an array, the map() method transforms the first character to uppercase, and join() merges the modified array into a string.
// Syntax:
// let result = [...str][0].toUpperCase() + [...str].slice(1).join('');
let str1 = "geeks for geeks";
let result = [...str1].map((char, index) =>
    index === 0 ? char.toUpperCase() : char).join('');
console.log(result);
//M3------
// Approach 3 : Using the split() , map() and join() methods
// The split() method divides the string into an array of characters, map() converts the first character to uppercase, and join() merges the modified array into a string.

// Example: In this example, w are using the above-explained approach.


let str2 = "amir Salam";
let result1 = str2.split('').map((char, index) =>
    index === 0 ? char.toUpperCase() : char).join('');
console.log(result1);