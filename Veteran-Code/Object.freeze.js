// The Object.freeze() method in JavaScript is used to freeze an object. Freezing an object means that you cannot add, delete, or modify properties of that object. It essentially makes the object immutable.

// Here's how you can use Object.freeze():
const obj = {
    prop1: 42,
    prop2: "hello"
};

// Freeze the object
Object.freeze(obj);

// Try to modify a property
obj.prop1 = 100; // This modification will be ignored in strict mode
obj.prop3 = "new property"; // This addition will be ignored in strict mode

console.log(obj); // Output: { prop1: 42, prop2: "hello" }

//   In this example, after Object.freeze(obj) is called, any attempt to modify obj will be ignored, whether it's modifying existing properties or adding new ones. The obj remains the same after attempting to modify it.

// It's important to note that Object.freeze() is shallow, meaning that it only freezes the immediate properties of the object. If the properties themselves are objects, those nested objects are not frozen. To freeze nested objects as well, you need to recursively call Object.freeze() on each nested object.

// Example 2
const numbers = [1, 2, 3];

Object.freeze(numbers);

// Attempting to modify elements
numbers[0] = 4; // Modification ignored
numbers.push(4); // Addition ignored

console.log(numbers); // Output: [1, 2, 3]
// Example 3 --- Freezing an object with nested objects:
const car = {
    make: "Toyota",
    model: "Camry",
    details: {
        color: "blue",
        year: 2020
    }
};

Object.freeze(car);

// Attempting to modify properties
car.make = "Honda"; // Modification ignored
car.details.color = "red"; // Modification to nested object ignored

console.log(car); // Output: { make: "Toyota", model: "Camry", details: { color: "blue", year: 2020 } }
