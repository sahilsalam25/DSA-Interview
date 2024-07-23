// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

// M1---------
let str = 'sahil salam'; // vowels = a,i,a,a
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
        // console.log(`new count =`, count);
    }

}
console.log(`Total Number of Vowels in ${str} are =`, count);

// M2---------

let str1 = "aeibcdsdf";
function countVowels(str1) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        console.log(str1.charAt(i));
        if (
            str1.charAt(i) == "a" ||
            str1.charAt(i) == "e" ||
            str1.charAt(i) == "i" ||
            str1.charAt(i) == "o" ||
            str1.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}
console.log(`Total no of vowels in ${str1} =`, countVowels(str1));