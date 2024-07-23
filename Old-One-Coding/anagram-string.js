let str1 = 'Army';
let str2 = 'Mary';
function checkAnagram(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    a = a.split('').sort().join('');
    console.log('here a=', a);
    b = b.split('').sort().join('');
    console.log('here b=', b);
    return a === b;
}
console.log(checkAnagram(str1, str2));
// Another Example...
let word1 = 'Listen';
let word2 = 'Silent';
function checkAnagramWords(word1, word2) {
    let a = word1.toLowerCase();
    let b = word2.toLowerCase();
    a = a.split('').sort().join('');
    console.log('another A =>', a);
    b = b.split('').sort().join('');
    console.log('another B =>', b);
    return a === b;
}
console.log('-------------');
console.log(checkAnagramWords(word1, word2));