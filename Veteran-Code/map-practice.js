const namesObject2 =
    [
        [[{ s1: [{ firstName: "Abdul", lastName: "Salam" },] }
            // { firstName: "Amir", lastName: "Salam" },
            // { firstName: "Sahil", lastName: "Salam" },
            // { firstName: "Imaad", lastName: "Maqsood" },

        ]
        ]
    ]
// namesObject.map((element, index, array) => {
//     console.log('element =', element[1][2].s1);
//     console.log('element1 name =', element[0].s1);
//     console.log('index =', index);
//     console.log('array =', array);
// })
const namesObject = [
    [
        [
            {
                s1: [{ firstName: "Abdul", lastName: "Salam" }]
            }
        ]
    ]
];

namesObject.map((element, index, array) => {
    console.log('element =', element);
    console.log('element1 name =', element[0][0].s1[0].firstName);
    console.log('index =', index);
    console.log('array =', array);
    console.log('s1 ->', element[0][0].s1.firstName);
});
console.log(namesObject[0][0][0].s1[0].firstName, namesObject[0][0][0].s1[0].lastName);