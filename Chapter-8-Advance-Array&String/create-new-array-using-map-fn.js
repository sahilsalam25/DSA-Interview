// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
// M1--------
let array = [1, 2, , 3, 4, 5];
console.log(array);
let newArray =
    array.map((num) => {
        return num + 5;
    })
console.log(newArray);

// M2---
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));
