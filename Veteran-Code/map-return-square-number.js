// M1---
let arr_1 = [1, 2, 3, 4, 5];
// Using Arrow function
// let Square = (num) => {
//     return num * num;
// }
// Using Normal function...
function Square(num) {
    return num * num;
}
let squareArr = arr_1.map(Square);


console.log('Square---', squareArr);
// M2---
let arr_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr_.map((number, index, value) => {
    console.log('number =', number);
    console.log('index =', index);
    console.log('value =', value);
    return number + number;
    // return value.toString().split('').reverse().join('');
})
console.log('Square of', arr_, '->', result);