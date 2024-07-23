let nums = [1, 2, 3, 4, 5];
// M1: using for loop to access the nums arr:
for (let i = 0; i < nums.length; i++) {
    console.log(`Using Basic for Loop: `, nums[i]);
}

//... M-2 using for-of loop:
for (let values of nums) {
    console.log(`Using for-of Loop: `, values);
}

// Method 3 using forEach Loop:

nums.forEach((number) => {
    console.log(`Using forEach Loop: `, number);
})

// Method 4 using map() method:
let result = nums.map((n) => {
    // return n;
    console.log(`Using map() method: `, n);
}
)
// console.log(`Using map() method: `, result);

// another example :
let info = [{
    name: 'sahil',
    age: 23,
    mob: 8406808090,
    email: 'sahilsalam780@gmail.com',
    city: 'bangalore',
}]
// using for of loop:

for (let valuesInfo of info) {
    console.log(valuesInfo);
}

//----
let fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// orange
let message = "Hello";

for (let char of message) {
    console.log(char);
}

// Output:
// H
// e
// l
// l
// o


