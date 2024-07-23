let str = "madam1";
//Method to reverse a given string:
// result = str.split('').reverse().join('');
// console.log(result);
// let strArray = str.split('');
// let strArrayRev = strArray.reverse();
// let revStr = strArrayRev.join('');
let revStr = str.split('').reverse().join('');
console.log(str);
// console.log(strArray);
// console.log(strArrayRev);
console.log(revStr);
if (str == revStr) {
    console.log(`${str} is Palindrome >= ${revStr}`)
}
else {
    console.log(` ${str} is Not Palindrome >= ${revStr}`)
}

