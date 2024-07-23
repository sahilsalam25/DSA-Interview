// M1---
let string1 = 'sahilsalam';
let startWith = string1.startsWith('s');
let endsWith = string1.endsWith('m');
console.log(startWith);
// for (let i = 0; i < string1.length; i++) {
if (startWith == true) {
    console.log('String is Start With', startWith);
}
if (endsWith == true) {
    console.log('String is Start With', endsWith);
    //     return true;
}
// }

// M2-----
// Using startswith() and endswith() method
// The startswith() method checks for the characters at the beginning of the string and the endswith() method checks for characters at the end of the given string. If both return true then it will assure the presence of that character at the end and beginning of the string.

// Example: This example shows the use of the above-explained appraoch.
const findChar =
    (input, startIndex, endIndex) => {
        const startCheck =
            input.startsWith(startIndex);
        const endCheck =
            input.endsWith(endIndex);

        return startCheck && endCheck;
    };

const input = "GeeksforGeeks";
const startIndex = "G";
const endIndex = "s";

if (findChar(input, startIndex, endIndex)) {
    console.log("True");
} else {
    console.log("False");
}
// M3-----
// Using charAt() method
// We define inputString and characters to check. Using charAt(), we verify the first and last characters. Then, we compare and return the values if conditions are met.

// Example: This example shows the use of the above-explained approach.
const input1 = "GeeksforGeeks";
const startIndex1 = "G";
const endIndex1 = "s";

// Check if the string starts with 
// the specified character 
const startCheck =
    input1.charAt(0) === startIndex1;

// Check if the string ends with 
// the specified character 
const endCheck =
    input1.charAt(input1.length - 1) === endIndex1;

// Log the result based on the conditions 
if (startCheck && endCheck) {
    console.log("True");
}
else {
    console.log("False");
}
// M4--- direct
const inputValue = "GeeksforGeeks";
// const startIndex = "G"; 
// const endIndex = "s"; 

// Check if the string starts with 
// the specified character 
// const startCheck = 
// 	input.charAt(0) === startIndex; 

// Check if the string ends with 
// the specified character 
// const endCheck = 
// 	input.charAt(input.length - 1) === endIndex; 

// Log the result based on the conditions 
if (inputValue.charAt(0) == 'G' && inputValue.charAt(inputValue.length - 1) == 's') {
    console.log("True..........");
}
else {
    console.log("False.........");
}
