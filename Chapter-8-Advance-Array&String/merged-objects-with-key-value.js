// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.....
// M1--------
// const mergeObjects = () => {
//     {
//         id: 1,
//             name: 'sahil salam',
//                 age: 24,
//                     city: 'nawada',

//     };
//     {
//         id: 2,
//             name: 'amir salam',
//                 age: 26,
//                     city: 'guwahati',}
// }
// console.log(mergeObjects.id);

// M2--------
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

// {a:1, b:2, c:3, d:4}
