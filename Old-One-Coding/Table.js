// console.log(Hello);
// var Hello = 'Hi...';
// console.log(Hello);
// console.log("Hello Demo...");
// let n = prompt('Enter the value of n :');
// n = parseInt
// for (let i = 1; i <= n; i++) {
//     console.log(i * n);
// }
// Prompt the user for input and store the result in a variable
// let userInput = prompt("Enter something:");

// Display the user input
// let userInput = [132, 8676, 950, 865, 650]
// console.log("You entered: " + userInput);
// console.log('Sahil Salam Array List :');
//--------------------------------------------
// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

// for(let i=1;i<=count;i++){
//     console.log()
// }
let number = '123456';
console.log(number.length);
let count = 0;
for (let count of number) {

    count += number.length;
}

console.log("number count value is", count);
console.log('---------------');
// let language = "JavaScript";
let num = '1234';

let sum = 0;
let count2;
for (let x of num) {
    sum += x;
    var finalSum = parseInt(sum)
    count2 = sum.length;
}
console.log(finalSum);
console.log('count 2 value is ', count2);
