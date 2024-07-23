// M1---
let string1 = 'My Name is Sahil Salam';
let subString1 = 'Sahil';
if (string1.includes(subString1)) {
    console.log(subString1, 'is Present in ->', string1);
}
else {
    console.log(subString1, 'is Not Present in ->', string1);
}
let positionOfString1 = string1.indexOf(subString1);
console.log('Position of Sub String', subString1, '->', positionOfString1);
// M2---
// Checking for Substring with includes() Method
// JavaScript string.includes() method can be used to check whether a string contains a specified substring. It returns true if the substring is present. This method is case-sensitive. 
// Syntax:
// string.includes(searchvalue, start)
let str1 = "Hello there! Welcome to GeeksforGeeks";
let flag1 = str1.includes("Geeks");
console.log(flag1, 'it is present in ->', str1);
// M3---
// Checking for Substring with indexOf() Method
// JavaScript indexOf() method returns the position of a substring in a string or -1 if not found, allowing us to check the substring’s existence.

// Syntax:

// str.indexOf(searchValue , index);
let str = "Hello there! Welcome to geeksforgeeks";
let substring = "geeks";
let result = str.indexOf(substring);
console.log(str, '\nPosition of Sub String ->', result);
if (result >= 0) {
    console.log(true);
}
else {
    console.log(false);
}

