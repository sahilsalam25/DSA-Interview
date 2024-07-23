let nums = [1, 2, 3, 4, 5];
for (let values in nums) {
    console.log(nums[values]);
    // console.log(values, nums[values]); // if we want both key & value then we can use it:
}
//--------
const numbers = [45, 4, 9, 16, 25];

// let txt = 0;
for (let x in numbers) {
    // txt += numbers[x];
    console.log(numbers[x]);
    // console.log(x, numbers[x]); // if we want both key & value then we can use it:

}
let info = [{
    name: 'sahil',
    age: 23,
    mob: 8406808090,
    email: 'sahilsalam780@gmail.com',
    city: 'bangalore',
}]
// console.log(info);
for (let data in info) {
    // console.log(data, info[data]);
    console.log(info[data]);
}

// using map():

// let resultValue = info.map((values) => {

//     console.log(values); // Method 1 ...direct console.log info value
//     return (values); // Method2 return value & store in a varible & then console.log():
// }
// )
// console.log(resultValue);

// using forEach:

// info.forEach((values) => {
//     console.log(`using foreach \n`, values);
// }
// )

// using for of loop:

// for (let valuesInfo of info) {
//     console.log(valuesInfo);
// }
let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(key, obj[key]);
}

// Output:
// a 1
// b 2
// c 3