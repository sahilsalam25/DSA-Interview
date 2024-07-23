// M1-------
// Using String replace() Method to replace characters from String
// JavaScript string.replace() method is used to replace a part of the given string with another string or a regular expression. The original string will remain unchanged.

// Example: Here we will replace the “GfG” with “Geeks” on the given string “Welocome to GfG”.
// JavaScript program to Replace
// Characters of a string
const str = 'Welcome to GfG';
const replStr = 'GfG';
const newStr = 'Geeks';

const updatedStr = str.replace(replStr, newStr);

console.log(updatedStr);
// M2-----
// Using Regular Expression to replace characters from String
// To replace all occurrences of a string in JavaScript using a regular expression, we can use the regular expression with the global (g) Flag.

// Example: In this example we will replace “Welcome” with “Hello” in the given string “Welcome GeeksforGeeks, Welcome geeks”.
const str1 = 'Welcome GeeksforGeeks, Welcome geeks';
const searchString = "Welcome";
const replacementString = "Hello";

let regex = new RegExp(searchString, 'g');

let replacedString =
    str1.replace(regex, replacementString);

console.log(replacedString);

