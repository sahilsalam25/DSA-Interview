// The bind() method in JavaScript is used to create a new function that, when called, has a specified this value, and optionally, initial arguments provided to it.

// Here's a more structured definition:

// Syntax:


// newFunction = functionName.bind(thisArg[, arg1[, arg2[, ...]]])
// Parameters:

// functionName: The function to be called.
// thisArg: The value to be passed as this when calling the function.
// arg1, arg2, ...: Arguments to be passed to the function when it is called.
// Return Value:
// A new function with the specified this value and initial arguments.

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// Here's an example to illustrate its usage:
//Example-1---

const person = {
    name: 'Sahil',
    greet: function () {
        return 'Hello, ' + this.name;
    }
};

const greetSahil = person.greet.bind(person);
console.log(greetSahil()); // Output: Hello, Sahil
// Explanation
// In this example, we have an object person with a property name and a method greet. We use the bind() method to create a new function greetJohn that, when called, will have person as its this context. When we call greetJohn(), it returns "Hello, Sahil".

// The bind() method is particularly useful when you want to create a function with a specific context (this value) that can be called later, independently of how it is invoked. This is commonly used in event handlers, callback functions, or when you need to preserve the context of a method to pass it around.

//Example-2---Partial Application of Functions:
function greet(greeting, name) {
    return greeting + ', ' + name;
}

const sayHello = greet.bind(null, 'Hello');
console.log(sayHello('Amir')); // Output: Hello, Amir
console.log(sayHello('Imaad')); // Output: Hello, Imaad

// Demo -
function sum(a, b) {
    return a + b;
}
let sum1 = sum.bind(null, 2, 8);
console.log('Sum1 =', sum1(4, 4));
// Important...
// The bind() method allows an object to borrow a method from another object without copying.

//Example 1: Using bind() Method

// object definition
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
        console.log(this.name + "studies in grade" + this.grade + ".");
    },
};

// object definition
const student2 = {
    name: "Jimmy ",
    grade: " 6",
};

// the object student2 is borrowing introduction method from student1
let result = student1.introduction.bind(student2);

// invoking result() function
result();  // Jimmy studies in grade 6.

// Explanation...
//   In the above example, we have defined two objects student1 and student2.

// Since student2 doesn't have the introduction() method, we are borrowing it from student1 using the bind() function.

// student1.introduction.bind(student2) returns the copy of introduction() and assigns it to result.

// Example 2: Using bind() Method with two Parameters
// object definition
const Student1 = {
    name: "Jack",
    introduction: function (score) {
        console.log(this.name + "scored " + score + " in an exam.");
    },
};

// object definition
const Student2 = {
    name: "Jimmy ",
};

// passing two parameters student2 and '95'
let Result = Student1.introduction.bind(Student2, 95);

// invoking result() function
Result(); // Jimmy scored 95 in an exam.

// Output

// Jimmy scored 95 in an exam.
// In the above example, we have passed two parameters thisArg and arg1 in bind().

// The student2 object is passed as this parameter and 95 is passed as an argument for the score parameter.

