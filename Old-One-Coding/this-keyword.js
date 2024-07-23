// this is a js keyword it is used to store the value of objects:
// Method-1 by using the object variable name to access the key value like infodata.name:
const infoData = {
    name: 'Sahil Salam',
    age: 23,
    mob: 8406808090,
    city: 'bangalore',
    data: function () {
        console.log(` ${infoData.name} is ${infoData.age} Year's Old`);
    }
}
console.log(infoData);
infoData.data();
//M2... by using the this keyword to access the objects key value :
const infoData1 = {
    name: 'Amir Salam',
    age: 25,
    mob: 9887507441,
    city: 'assam',
    name_age: this.name,
    // it will print undefined
    name_age1: infoData.name,
    // it will print Sahil Salam
    data1: function () {
        console.log(` ${this.name} is ${this.age} Year's Old`);
        return this.city;
    }
}
console.log(infoData1);
infoData1.data1();
console.log('age is ', infoData1.age);
console.log('mobile no is ', infoData1.mob);