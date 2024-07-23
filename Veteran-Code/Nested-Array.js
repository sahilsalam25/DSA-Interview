// // Creating a nested array
// const nestedArray = [
//     [1, 2],
//     [4, 6],
//     [7, 9]
// ];
// console.log('Nested Array =', nestedArray);
// // Accessing elements of the nested array
// console.log(nestedArray[0][0]); // Output: 1
// console.log(nestedArray[1][2]); // Output: 6
// console.log(nestedArray[2][1]); // Output: 8
// Creating a nested array representing a shopping list
const shoppingList = [
    ["Apples", 5],
    ["Bananas", 7],
    ["Milk", 2, object = {
        person: 'Coder',
        name: 'Sahil',
        age: 24,
        obj1: {
            address: 'kamalpur',
            city: 'nawada',
            pin: 805110,
            nearbycity: ['nalanda', 'gaya', 'rajgir',
                touristplace = ['kakolat', 'tilaiya', 'biharsharif',
                    touragency = {

                        rate: 550,
                        rate2: 1100,
                        rate3: {
                            normal_tour: "Rs 999 Only",
                            special_tour: 'Rs 1499 Only',
                            extra_cool: 'Rs 1999 Only',

                        }
                    }
                ]


            ]

        }
    }

    ],
    ["Bread", 1]
];
console.log('Near by city of Nawada is :', shoppingList[2][2].obj1.nearbycity[2]);
console.log('Toursit place near by Nawada is let kakolat :', shoppingList[2][2].obj1.nearbycity[3][0]);
console.log('Toursit agencies price near by Nawada is let 1100 :', shoppingList[2][2].obj1.nearbycity[3][3].rate2);
console.log('Let Normal Tour Price (999) =', shoppingList[2][2].obj1.nearbycity[3][3].rate3.normal_tour);
// Accessing elements of the nested array
//   console.log(shoppingList[0][0]); // Output: "Apples"
//   console.log(shoppingList[1][1]); // Output: 7
//   console.log(shoppingList[3][0]); // Output: "Bread"

// Example 2---
// Creating a nested array representing a 3x3 grid
const grid = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

// Accessing elements of the nested array
console.log(grid[0][0]); // Output: "X"
console.log(grid[1][2]); // Output: "O"
console.log(grid[2][1]); // Output: "O"
