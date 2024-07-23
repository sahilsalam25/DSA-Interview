// let str1 = 'Army';
// let str2 = 'Mary';
// function checkAnagram(str1, str2) {
//     let a = str1.toLowerCase();
//     let b = str2.toLowerCase();
//     a = a.split('').sort().join('');
//     b = b.split('').sort().join('');
//     return a === b;
// }
// console.log(checkAnagram(str1, str2));

let s1 = 'sahil'
let s2 = 'sahil'
function isAnagram() {
    let a1 = s1.toLowerCase();
    let a2 = s2.toLowerCase();
    a1 = Array.from(a1);// it is a method to convert an array
    a1 = a1.sort().join('');
    a2 = a2.split('').sort().join('');
    if (a1 == a2) {
        console.log('the given word is Anagram');
    }
    else {
        console.log('the given word is not an Anagram');
    }
}
console.log(isAnagram());