// let arr = [10, 5];
// let demo = arr.reduce((a, b) => {
//     console.log('a =', a);
//     console.log('b =', b);
//     // console.log('c =', c);
//     // console.log('c =', c);
//     // console.log('d =', d);
//     // console.log('e =', e);
//     // console.log('a1 =', a);
//     // console.log('b1 =', b);
//     // console.log('c1 =', c);
//     // console.log('d 1=', d);
//     // console.log('e 1=', e);
//     // console.log('a2 =', a);
//     // console.log('b 2=', b);
//     // console.log('c 2=', c);
//     // console.log('d 2=', d);
//     // console.log('e 2=', e);

// }

// )
// console.table('Using Map---')

// console.log(
//     arr.map((a, b, c, d, e) => {
//         console.log('a =', a);
//         console.log('b =', b);
//         console.log('c =', c);
//         console.log('d =', d);
//     })

// );
// console.table('Using filter---')
// console.log(
//     arr.filter((a, b, c, d, e) => {
//         console.log('a =', a);
//         console.log('b =', b);
//         console.log('c =', c);
//         console.log('d =', d);
//     })

// );

//--------
const namesObject1 =
    [
        { firstName: "Abdul", lastName: "Salam", age: 54 },
        { firstName: "Amir", lastName: "Salam", age: 26 },
        { firstName: "Suleman", lastName: "Azad", age: 65 },
        { firstName: "Sahil", lastName: "Salam", age: 24 },
        { firstName: "Imaad", lastName: "Maqsood", age: 1.2 },


    ]
// let res = namesObject1.reduce((a, b, c, d, e) => {
//     console.log('a =', a);
//     console.log('b =', b.age);
//     console.log('c =', c);
//     console.log('d =', d);
// }, {})
let resultTotalAge = namesObject1.reduce((accumulator, current) => {
    return accumulator + current.age;

}, 0)
console.log(resultTotalAge);
let resultMaxAge = namesObject1.reduce((prev, person) => {
    if (person.age > prev) {
        console.log('person age', person.age);
        console.log('prev =', prev);
        return person.age;
    }
    // console.log('final prev=', prev);
    // console.log('final person', person);
    // console.log('final person age', person.age);
    return prev;

}, 0)
// console.log(resultMaxAge);
// console.log(
let res31 =
    namesObject1.filter((ele) => {
        if (ele.age <= 25) {
            // return ele.firstName
            console.log(ele.firstName);
        }
    })
// );
// console.log('first name -', res31);
let res3 =
    namesObject1.filter((ele) =>
        ele.age <= 25
        // return ele.firstName
        // console.log(ele.firstName);

    ).map((element) =>
        element.firstName
    );
console.log('res3 using map', res3);