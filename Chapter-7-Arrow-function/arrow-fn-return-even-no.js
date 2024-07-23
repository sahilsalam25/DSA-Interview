// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
// M1--------
// const isEven = (number) => {
//     if (number % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// isEven(2);
// isEven(3);
// console.log(isEven(121052));

// M2----

const isEven = (num) => num % 2 == 0;
// isEven(3);
// isEven(8);
console.log(isEven(20));

