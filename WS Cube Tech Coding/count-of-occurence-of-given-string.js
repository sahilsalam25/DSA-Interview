let string = 'sahil salam';
let count = 0;
for (let i = string.length; i >= 0; i--) {
    if (string[i] == 's') {
        console.log(string[i]);
        count++;

    }

}
console.log('s ->', count);
// M2---
// Count occurrence of a given character in a string using Inbuild Functions:
// JavaScript program to count occurrences of
// a character using library

// Driver code to test above function
let str = "geeksforgeeks";
let c = 'g';

// Count returns number of occurrences of
// c between two given positions provided
// as two iterators.
console.log(c);
console.log(str.split(c));
console.log(str.split(c).length - 1);
