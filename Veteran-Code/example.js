const namesObject =
    [
        { id: 0, firstName: "Abdul", lastName: "Salam", age: 55 },
        { id: 1, firstName: "Amir", lastName: "Salam", age: 26 },
        { id: 2, firstName: "Sahil", lastName: "Salam", age: 26 },
        { id: 3, firstName: "Imaad", lastName: "Maqsood", age: 52 },

    ];
let re1 = namesObject.map((ele) => {
    console.log('Age =', ele.age);
    return ele.age;

}).reduce((accu, current) => {
    console.log('main Accu ', accu);
    console.log('main current ', current);
    if (current == 55) {
        console.log('Accu 1', accu);
        console.log('Current 1', current);
        return current;
    }
    else if (current == 26) {
        console.log('Accu 2', accu);
        console.log('Current 2', current);
        return current;
    }
    else if (current == 52) {
        console.log('Accu 3', accu);
        console.log('Current 3', current);
        return current;
    }


}, 0);



//.filter((Element) => {
//     // console.log(Element, '---');
//     if (Element == 26) {
//         console.log(Element);
//     }
//     if (Element == 55) {
//         console.log(Element);
//     }

//     // console.log('ele =', Element);
// })
console.log(re1);
