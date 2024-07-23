const namesObject =
    [
        { id: 0, firstName: "Abdul", lastName: "Salam" },
        { id: 1, firstName: "Amir", lastName: "Salam" },
        { id: 2, firstName: "Sahil", lastName: "Salam" },
        { id: 3, firstName: "Imaad", lastName: "Maqsood" },

    ]
let result = namesObject.map((element) => {
    return element.firstName.toUpperCase() + '-' + element.lastName.toUpperCase();
})
// let filter_id1 = namesObject.filter((idvalue) => {
//     // return idvalue.id % 2 == 0;
// })
// console.table(result);
// console.table(filter_id1);


let filter_id1 = namesObject.filter((a, b, c, d) => {
    // return idvalue.id % 2 == 0;
    // console.log('a =', a);
    // console.log('b =', b);
    // console.log('c =', c);
    // console.log('d =', d);
})
let demo2 = namesObject.filter((ele) => {
    return ele.lastName == 'Salam';
})
// console.table(demo2);
let arrAy = [3, 1, 2, 3, 4, 5, 3, 6, 7, 8, 3, 9, 3, 10];
let res1 = arrAy.filter((num, index) => {
    if (num % 2 == 0) {
        console.log('index ->', index, 'num =', num);
    }

    return num == 3
});
// console.table(res1);
console.log(res1);