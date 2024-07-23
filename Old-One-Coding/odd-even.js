// Method-1 Using  if-else
// function printOddEven(num) {
//     if (num % 2 == 0) {
//         console.log(`Given Number ${num} is Even Number `);
//     }
//     else {
//         console.log(`Given Number ${num} is Odd Number `);

//     }
// }
// printOddEven(2121);

//Method-2 Usinf Ternary Operator
function ternaryOp(number) {
    let result = number % 2 == 0 ? `Given Number ${number} is Even Number` : `Given Number ${number} is Odd Number`
    console.log(result);
}
ternaryOp(5016);