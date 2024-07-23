// Approach 3: Using split(), reverse() and join() methods
// Use inbuilt string methods like split() to split the string into characters array
// Reverse the array using reverse() method
// Join the array into a string using join() method
// Store this value inside another variable
// Compare the values and return true if both are equal
// Example: This example implements the above approach on string


function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "sahil";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));