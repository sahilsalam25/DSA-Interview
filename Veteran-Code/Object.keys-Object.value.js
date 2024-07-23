// How to use Object.values()?
// The second method to convert a JavaScript object into an array is using Object.values().
// Object.values() is a method available on all JavaScript objects that returns an array of the object's values. Here's an example of using Object.values() to convert an object into an array


let person = {
    id: 25,
    name: 'Sahil Salam',
    username: 'sahilsalam25',
    age: 24,
    city: 'Nawada',
    pin: 805110,
    state: 'Bihar',
    hobbies: ['Playing Cricket', 'Travelling'],
    active: true,

}
// simple way to print key & value of object...it will give output in Array form...
let Keys = Object.keys(person);
console.log('Keys ->', Keys);
// console.table(Keys);
// console.table(person);
let Values = Object.values(person);
console.log('Values =', Values);
// console.table(Values);
// console.log(Keys, Values);
// it will give output in array form with key value pair...
// let Entries = Object.entries(person);
