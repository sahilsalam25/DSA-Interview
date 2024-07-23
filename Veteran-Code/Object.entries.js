// How to use Object.entries()?
// The first method to convert a JavaScript object into an array is using Object.entries().
// Object.entries() is a method available on all JavaScript objects that returns an array of arrays, where each inner array consists of a key/value pair from the object. Here's an example of using Object.entries() to convert an object into an array
let obj = { name: 'John', age: 30, city: 'New York' };

let arr = Object.entries(obj);
console.log(arr);

// Output: [['name', 'John'], ['age', 30], ['city', 'New York']]
