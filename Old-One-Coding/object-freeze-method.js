'use strict'; // it is used to strict the method:
const info = {
    name: 'sahil',
    age: 23,
    mob: 8406808090,
    email: 'sahilsalam780@gmail.com'
}

Object.freeze(info); // it is used to freeze the object data so that object value cant be changed...
console.log('Before Updating the Values of Info', info);
info.name = 'Amir Salam';
info.age = 25;
console.log('After Updations of Info', info);
console.log(info.name, info.age);