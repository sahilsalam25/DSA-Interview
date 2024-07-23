// M1---Using Regex
// Using Regex expression
// A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text to replace operations.

// Example: In this example we are using Regex expression.
let string = 'Amir salam';
let Reg = /[aeiou]/gi;
let result = string.match(Reg);
console.log(result.join(','));
console.log(result.length);

// M2------
function vowelCount(str) {
    const vowelRegex = /[aeiou]/gi;
    const strMatches = str.match(vowelRegex);

    if (strMatches) {
        return strMatches.length;
    } else {
        return 0;
    }
}
const string1 = "Geeksforgeeks";
const len = vowelCount(string1);
console.log('Number of vowels in :', string1, 'is -> ', len);
// M3--- using for loop;
let str2 = 'Abdul Salam';
let count = 0;
for (let i = 0; i <= str2.length; i++) {
    let res = str2.toLowerCase();
    if (str2[i] == 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u') {
        count++;

        console.log(str2[i]);
    }
}
console.log(" Number of vowels in :", str2, 'is -> ', count, " Number of Consonants in :", str2, 'is -> ', str2.length - count);
//M4---- Using for loop with Array
let name = 'Imaad Salam';
let vowels2 = ['a', 'e', 'i', 'o', 'u'];
let count2 = 0;
// console.log(array, array.length);
for (let i = 0; i < name.length; i++) {
    if (vowels2.includes(name[i])) {
        count2++;
    }
    // console.log('testing.......', name[i], array[i]);
    // console.log(array.includes(name[i]));
}
console.log('------', count2);
// M5---- using for of loop
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
// const string3 = prompt('Enter a string: ');
let string3 = 'Amir Sahil Salam';
const result3 = countVowel(string3);

console.log(result3);
