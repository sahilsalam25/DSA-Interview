// In JavaScript, the for...in loop is used to iterate over the enumerable properties of an object. Here's a basic syntax:


// for (variable in object) {
// code block to be executed
// }
// variable: A variable that will be assigned to each property in the object during each iteration.
// object: The object whose enumerable properties are to be iterated.

// M1---Here's an example:


const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log('Key =', key, ',', 'Value =', person[key]);
    // console.log(key + ': ' + person[key]);
}
// This loop will output:


// name: John
// age: 30
// city: New York
// However, note that for...in loops should be used with caution, especially with arrays, as they iterate over all enumerable properties, including those inherited from the object's prototype chain. This can lead to unexpected behavior if not handled properly. For iterating over arrays, it's generally recommended to use for...of or array methods like forEach().
// M2---Iterating over an array:

const fruits = ["apple", "banana", "orange"];

for (let index in fruits) {
    console.log(index, fruits[index]);
}
// This will output:


// apple
// banana
// orange
// However, it's worth noting that while this works, it's generally better to use a for...of loop or array methods like forEach() for iterating over arrays in JavaScript.

// M3---Iterating over the properties of a built-in object:

const car2 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};

for (let key in car2) {
    console.log(key + ': ' + car2[key]);
}
// This will output:


// brand: Toyota
// model: Camry
// year: 2020

// M4--- Using for...in with objects created with constructors:

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person('John', 30);

for (let prop in john) {
    console.log(prop + ': ' + john[prop]);
}
// This will output:


// name: John
// age: 30

// M5---Iterating over the properties of an object with inherited properties:

function Animal(name) {
    this.name = name;
}

Animal.prototype.type = 'Mammal';

const cat = new Animal('Fluffy');

for (let prop in cat) {
    console.log(prop + ': ' + cat[prop]);
}
// This will output:


// name: Fluffy
// type: Mammal
// Notice how type, which is inherited from the Animal prototype, is also included in the iteration.

// M6---Checking if a property exists in an object:

const person1 = {
    name: 'Alice',
    age: 25,
    city: 'London'
};

const propertyToCheck = 'age';

for (let key in person1) {
    if (key === propertyToCheck) {
        console.log(propertyToCheck + ' exists in the person object.');
        break;
    }
}
// This will output:


// age exists in the person object.

// Demo
let NAME = { name: 'Sahil Salam' };
for (let letter in NAME) {
    console.log('Key =', letter, '\nValue Using for-in =', NAME[letter]);
}
// for (let letter of NAME) {
//     // console.log('Letter Using for-of =', letter);
// forof will not work with objects..
// }

// Demo 2-
let car = {
    brand: 'Toyota',
    model: 'Camry',
    name: 'John',
    age: 30,
    city: 'New York'
}

for (let key in car) {
    console.log(key + ': ' + car[key]);
}
console.log('Car =', car);
console.log('Person =', person);

