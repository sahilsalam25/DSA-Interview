let nums = [1, 2, 3, 4, 5];
nums.forEach((number) => {
    console.log(number);
});
// if we want to print the square of each number in given array:
let nums1 = [1, 2, 3, 4, 5];
nums.forEach((number) => {
    console.log(`Square of given array ${nums1} is :`, number * number);
});
// Method 1
let names = ['Sahil', 'Salam'];
names.forEach((NAME) => {
    console.log(NAME);
}
)
// MEthod 2...using a external function:
names2 = ['Amir', 'Salam'];
names2.forEach((personName) => {
    console.log(personName);
});
// function personName() {
//     console.log(personName);
// }
// personName();

// another example:
let info = [{
    name: 'sahil',
    age: 23,
    mob: 8406808090,
    email: 'sahilsalam780@gmail.com',
    city: 'bangalore',
}]
// using forEach:

info.forEach((values) => {
    console.log(`using foreach \n`, values);
}
)
