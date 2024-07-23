// Object.freeze(info);
const option1 = { key: "hello" }
// Object.freeze(option1.key);
const option2 = option1

option2.key = "Hi"

console.log(option1);
console.log(option2);