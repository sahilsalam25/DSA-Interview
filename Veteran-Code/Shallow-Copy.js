// Shallow Copy:
// A shallow copy creates a new object or array and copies the references of the original elements into the new object or array. It means that if the elements are themselves objects or arrays, only their references are copied, not the objects or arrays themselves.
// Therefore, modifying the copied elements directly will affect the original elements, as they point to the same memory locations.
// Shallow copy methods in JavaScript include Object.assign(), the spread operator (...), and Array.slice().
//  Example-1 --- 
const originalArray = [1, 2, { a: 3 }];
const shallowCopy = originalArray.slice();

shallowCopy[0] = 100; // Modify shallowCopy

console.log(originalArray); // Output: [1, 2, { a: 3 }]
console.log(shallowCopy);   // Output: [100, 2, { a: 3 }]

// Example-2--- // Original object
const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Shallow copy using Object.assign()
  const shallowCopyObject = Object.assign({}, originalObject);
  
  // Modify the shallow copy
  shallowCopyObject.name = 'Alice';
  shallowCopyObject.address.city = 'UK';
  
  // Original object remains unaffected
  console.log(originalObject);
  // Output: { name: 'John', age: 30, address: { city: 'New york', country: 'USA' } }
  
  // Shallow copied object
  console.log(shallowCopyObject);
  // Output: { name: 'Alice', age: 30, address: { city: 'UK', country: 'USA' } }
  
//   In this example:

//   We have an original object originalObject with a nested object address.
//   We create a shallow copy of originalObject using Object.assign(), which copies the properties of originalObject to an empty object {}.
//   Modifying the properties of the shallow copied object (shallowCopyObject) directly affects the nested object within the original object (originalObject), as they share references to the same nested object.
//   However, modifying the top-level properties (name, age) of the shallow copied object does not affect the original object, as those properties are primitives and get copied by value.