// Method 1- USing Regex:
let str = 'Sahil Salam';
const reg = /[aeiou]/gi;
let char = str.match(reg);
let count = char.length;
console.log(`No of Vowel Count in ${str} is [${char}] >= ${count}`);