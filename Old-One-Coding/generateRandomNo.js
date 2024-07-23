// let randomNo = Math.random();
// function printRandomNo() {
//     return randomNo;
// }
// printRandomNo();
// console.log(printRandomNo());
// Generate a random no of 4 digit for OTP:
let randomNo = (Math.random()) + 9;
console.log('Before OTP Random Number is : ', randomNo);
randomNo = randomNo * 856;
console.log('After OTP Random Number is : ', randomNo);
console.log('Final OTP Random Number is : ', Math.floor(randomNo));
// function printRandomNo() {
//     return randomNo;
// }
// printRandomNo();
// console.log(`Your OTP is : `, printRandomNo());
