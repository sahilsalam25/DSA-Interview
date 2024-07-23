// Object.freeze(info);
const option1 = { key: "hello" }
console.log('1st =', option1);
// Object.freeze(option1);
const option2 = option1
console.log('2nd =', option1);
console.log('1st op2=', option2);
option2.key = "Hi"

console.log(option1);
console.log(option2);
let a = 5;
let b = a;
b = 11;
console.log(a);
console.log(b);