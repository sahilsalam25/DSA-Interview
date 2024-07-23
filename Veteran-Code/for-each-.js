let arr = [1, 2, 3, 4, 5];
let result = arr.forEach((a, b, c, d, e) => {
    // console.log('a =', a);
    // console.log('b =', b);
    // console.log('c =', c);
    // console.log('d =', d);
    // console.log('e =', e);
    // console.log('Sum', a + b);
});
console.log('Result =', result);
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, arr) => {

    arr[index] = number * 2;
    // console.log('foreach array', arr);
});
console.log('foreach---', numbers);
console.log('main array', numbers);
//M2--- Using forEach to iterate over the array of Employee details.
const Employees = [
    {
        name: 'John', age: 35,
        team: "Data Strcuture & Alogirthm"
    },
    {
        name: 'Doe', age: 26,
        team: "DevOps Bootcamp"
    },
    {
        name: 'Ben', age: 21,
        team: "Data Science"
    }
];

// Using forEach loop.
Employees.forEach((Employees) => {
    console.log(
        `
${Employees.name} is ${Employees.age} years old
and is the part of ${Employees.team} team.\n
		`
    );
});
// M2---
const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

// print name
staffsDetails.forEach((staffDetail) => {
    let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
    console.log(sentence);
});
// M3--- print name with index
staffsDetails.forEach(({ name }, index) => {
    let sentence = `I am ${name} a staff of Royal Suites.`;
    console.log(sentence);
});

// M4--- print total 
const scores = [12, 55, 70, 47];

let total = 0;
scores.forEach((score) => {
    total += score;
});

console.log(total);
// M5--- print salary 
staffsDetails.forEach(({ name, salary }) => {
    if (salary >= 4000) {
        console.log(name);
    }
});
// M6--- index print
const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits[1]);
fruits.forEach((fruit, index) => {
    console.log(`#${index}: ${fruit}`);
});
// M6--- sum array
const Numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
Numbers1.forEach(number => {
    sum += number;
});
console.log(sum); // Output: 15

// M7---Iterating over Strings:
const str = 'Hello';
const chars = [];
Array.from(str).forEach(char => {
    chars.push(char);
});
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
