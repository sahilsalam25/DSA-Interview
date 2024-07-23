let evenArr = [2, 4, 6, 8, 20];
let result = evenArr.every((number) => {
    number % 2 == 0
});
console.log(result);
[2, 4, 6, 8, 20].every((num) => num % 2 == 0);