// M1--- using if else;
let num = -5;
if (num > 0) {
    console.log('given number is positive number');
}
else if (num < 0) {
    console.log('given number is negative number');
}
else {
    console.log('given number is zero');
}

// M2-----using built in function
let number = Math.sign(-2);
console.log(number);
console.log(Math.sign('s'));
if (number == 1) {
    console.log('given number is positive number');
}
else if (number == -1) {
    console.log('given number is negative number');
}
else {
    console.log('given number is zero');
}
