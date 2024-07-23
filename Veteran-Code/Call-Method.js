// In JavaScript, the call() method is used to call a function with a specified this value and arguments provided individually.

// Here's a basic syntax of the call() method:


// functionName.call(thisArg, arg1, arg2, ...);
// functionName: The function to be called.
// thisArg: The value to be passed as this when calling the function.
// arg1, arg2, ...: Arguments to be passed to the function.


//Example-1---
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Abdul",
    lastName: "Salam"
}

const person2 = {
    firstName: "Imaad",
    lastName: "Maksood"
}

// Using call() to invoke the function fullName with different objects
console.log(person.fullName.call(person1)); // Output: Abdul Salam
console.log(person.fullName.call(person2)); // Output: Imaad Maksood
//Explanation...
// In this example, the fullName function is defined within the person object. We then have two other objects, person1 and person2, each with firstName and lastName properties. By using the call() method, we can execute the fullName function with different this contexts (person1 and person2), allowing us to reuse the function across different objects.

// Example-2---

let NAME = {
    firstName: 'Sahil',
    lastName: 'Salam',
    printName: function (city, pincode, state) {
        console.log(this.firstName, this.lastName, 'from', city, 'Pincode', pincode, ' & State-', state);
    }
}
// console.log(NAME.firstName);
NAME.printName('Nawada', 805110, 'Bihar');
let NAME2 = {
    firstName: 'Amir',
    lastName: 'Salam',
}
// NAME.printName.call(NAME2, 'Guwahati', 123456, 'Assam');
// NAME.printName.apply(NAME2);
NAME.printName.apply(NAME2, ['Guwahati', 123456, 'Assam']);

// Example-3---Using call() to Borrow Methods:

const Person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const Person2 = {
    firstName: "Zakaur",
    lastName: "Rahman"
}

// Borrowing the fullName method from person1 for person2
const fullName = Person1.fullName.call(Person2);
console.log(fullName); // Output: Zakaur Rahman
// In this example, we borrow the fullName method from person1 and apply it to person2 using the call() method.

// Example-4---Using call() to Invoke Built-in Functions with Different Contexts:

function greet() {
    return "Hello, " + this.name;
}

const Person = {
    name: "Sahil..."
}

const greeting = greet.call(Person);
console.log(greeting); // Output: Hello, Sahil...
// Here, we define a simple greet() function and then use call() to invoke it with the person object as its this context.

//Example-5---Using call() to Pass Arguments:

function introduce(age, profession) {
    return `My name is ${this.name}, I am ${age} years old, and I work as a ${profession}`;
}

const PERSON = {
    name: "Sahil"
}

const introduction = introduce.call(PERSON, 24, "Developer...!");
console.log(introduction); // Output: My name is Sahil, I am 24 years old, and I work as a Developer....
// In this example, we pass additional arguments (age and profession) to the introduce() function using call(). These arguments are passed after the this context argument.
