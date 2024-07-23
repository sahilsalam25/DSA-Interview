const namesObject =
    [
        { firstName: "Abdul", lastName: "Salam" },
        { firstName: "Amir", lastName: "Salam" },
        { firstName: "Sahil", lastName: "Salam" },
        { firstName: "Imaad", lastName: "Maqsood" },

    ]
// M1---using for loop
let result1;
let result2;
let Capital_Name = [];
let Lower_Name = [];
for (let i = 0; i < namesObject.length; i++) {
    result1 = namesObject[i].firstName.toUpperCase();
    result2 = namesObject[i].firstName.toLowerCase();

    // console.log('------', result);
    // Capital_Name.push(result1);
    Capital_Name.unshift(result1);
    // unshift is used when we have to add name in reverse order...

    Lower_Name.push(result2);
    // return result;
}

console.log('Capital Name->', Capital_Name);
console.log('Lower name->', Lower_Name);
// M2 --- Using Map Method

const namesObject1 =
    [
        { firstName: "Abdul", lastName: "Salam" },
        { firstName: "Amir", lastName: "Salam" },
        { firstName: "Sahil", lastName: "Salam" },
        { firstName: "Imaad", lastName: "Maqsood" },

    ]
const Capital1 = namesObject1.map((element) => {
    return element.firstName.toUpperCase();
})
console.log('Using Map Method Capital NAME->', Capital1);
const Lower1 = namesObject1.map((element) => {
    return element.lastName.toLowerCase();
})
console.log('Using Map Method Lower name->', Lower1);
