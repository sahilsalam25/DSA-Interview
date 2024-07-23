// Array.from() a method is used to convert any other method into array:
let name = 'Sahil Salam';
console.log(name, typeof name);
let arr = Array.from(name);
console.log(arr, typeof arr);

// name.forEach((a) => {
//     console.log(a);
// })
//the upper code will give error: TypeError: name.forEach is not a function
arr.forEach((a) => {
    console.log(a);
})
//-------
// let names = ['Sahil', 'Salam'];
// names.forEach((NAME) => {
//     console.log(NAME);
// }
// )