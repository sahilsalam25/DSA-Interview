const arr = [1, 2, 3, 4, 5];
let squareArr = arr.map((value) => {
    return value * value;
},);
console.log('Square of Given Number is : ', squareArr);
let addArr = arr.map((value) => {
    return value + value;
},);
console.log('Addition of Given Number is : ', addArr);
let printValue = arr.map((val) => {
    return val;
}
)
console.log(`Value of Array is :`, printValue);
// find the square root of given array:
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(`Value of Square root is :`, newArr);

// print persons first name:
const persons = [
    { firstname: "Abdul", lastname: "Salam" },
    { firstname: "Sahil", lastname: "Salam" },
    { firstname: "Amir", lastname: "Salam" },

];

let names = persons.map(getFullName);

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}
console.log(names);
// another example:
let info = [{
    name: 'sahil',
    age: 23,
    mob: 8406808090,
    email: 'sahilsalam780@gmail.com',
    city: 'bangalore',
}]
// using map():

let resultValue = info.map((values) => {

    console.log(values); // Method 1 ...direct console.log info value
    return (values); // Method2 return value & store in a varible & then console.log():
}
)
console.log(resultValue);
// another example
console.log('Another Example.....');
let users = [
    { firstName: "Abdul ", lastName: "Salam" },
    { firstName: "Amir", lastName: "Salam" },
    { firstName: "Sahil", lastName: "Salam" }
];

let userFullnames = users.map(function (element) {
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
// output - [ "Abdul Salam", "Amir Salam", "Sahil Salam"]