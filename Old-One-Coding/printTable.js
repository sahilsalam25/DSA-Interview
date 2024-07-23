// let number = 5;
// let i;
function printTable(num) {
    for (i = 1; i <= 10; i++) {


        console.log(` ${num} X ${i} = ${i * num}`);
    }
}
// console.log(printTable(2));
printTable(1);
printTable(2);
printTable(3);
printTable(4);
printTable(5);
// take input from user - using function:
let num = prompt("Enter Any Number :");
num = parseInt(num);
console.log(num);
function printTable(num) {
    for (i = num; i <= num * 10; i += num) {
        console.log(` ${num} X ${i / num} = ${i}`);
    }
}
// // console.log(printTable(2));
// // printTable(5);
printTable(10);