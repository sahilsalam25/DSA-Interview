// Deep Copy:
// A deep copy, on the other hand, creates a new object or array and recursively copies all nested objects and arrays as well. It means that even nested objects and arrays are duplicated, not just their references.
// Modifying the copied elements will not affect the original elements, as they are completely separate entities.
// Achieving a deep copy in JavaScript often requires custom implementations, as native methods typically perform shallow copies.
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Base case: return non-object values directly
    }

    const newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        newObj[key] = deepCopy(obj[key]); // Recursively copy nested objects/arrays
    }
    return newObj;
}

const originalArray = [1, 2, { a: 3 }];
const deepCopiedArray = deepCopy(originalArray);

deepCopiedArray[2].a = 100; // Modify deepCopiedArray

console.log(originalArray); // Output: [1, 2, { a: 3 }]
console.log(deepCopiedArray);   // Output: [1, 2, { a: 100 }]

// Example-2--- 
// Original object
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Deep copy using JSON methods
const deepCopiedObject = JSON.parse(JSON.stringify(originalObject));

// Modify the deep copy
deepCopiedObject.name = 'Alice';
deepCopiedObject.address.city = 'Los Angeles';

// Original object remains unaffected
console.log(originalObject);
// Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }

// Deep copied object
console.log(deepCopiedObject);
// Output: { name: 'Alice', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
// In this example:

// We use JSON.stringify() to serialize the originalObject into a JSON string and then JSON.parse() to parse it back into a JavaScript object. This effectively creates a deep copy of the original object.
// Modifying properties of the deep copied object (deepCopiedObject) does not affect the original object (originalObject), as they are completely separate entities with their own copies of nested objects.
// This method has some limitations, such as being unable to copy non-serializable data types (like functions, undefined, or objects with circular references). However, for simple cases like this, it provides a quick and easy way to perform deep copying.
// demo 
let namesObj_1 = {
    name: 'sahil salam',
    age: 24,
}
let copyObj_1 = namesObj_1;
let copyObj_2 = Object.assign({}, namesObj_1);
copyObj_1.name = {
    address: 'kamalpur',
    city: 'nawada',
    pin: 805110
}
copyObj_2.age = 25;
let deepCopyObj = JSON.parse(JSON.stringify(namesObj_1));
deepCopyObj.age = 35;
console.log('Original Object =', namesObj_1);
console.log('Copy Object 1 =', copyObj_1);
console.log('Copy Object 2 =', copyObj_2);
console.log('Deep Copy Object 2 =', deepCopyObj);