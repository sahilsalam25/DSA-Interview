let a = 151, b = 345, c = 60;
console.log('a,b,c =', a, b, c);
// M1 using JS Built in method Math.max();
console.log(`LArgest number is `, Math.max(a, b, c));


//M2 array destructing
let arrNum = [11, 23, 2121, 355, 60, 5, 1, 32, 54]
console.log(arrNum);

console.log(`Largest number is `, Math.max(...arrNum));


// M3- if else
// if (a > b && a > c) {
//     console.log('a is largest', a);
// }
// else if (b > a && b > c) {
//     console.log('b is largest', b);
// }
// else {
//     console.log('c is largest', c);
// }

