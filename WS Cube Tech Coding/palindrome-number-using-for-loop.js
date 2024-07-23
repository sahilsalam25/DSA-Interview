
// M1----
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const testString = "radar";
console.log(isPalindrome(testString)); // Output: true
// M2-----
function isPalindrome(str) {
    let rev = "";
    // let finalStr = str.replace().toLowercase();
    // console.log(finalStr);
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log('---', str[i]);
        rev += str[i];

    }
    console.log('rev string =', rev);
    if (rev == str) {

        return true
    } else {
        return false;
    }
}
let str = 'Dad';

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Amir";
console.log(isPalindrome(str));
console.log(isPalindrome('sahil'));
// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
// let sahil = 'abcd';
// let salam = 'efgh';
// console.log(sahil[0] + salam[2]);
// const Str1 = 'sahil'
// const len = Str1.length;
// console.log('len/2 =', len / 2);
// for (let i = 0; i < len / 2; i++) {
//     console.log('i =', i);
// }