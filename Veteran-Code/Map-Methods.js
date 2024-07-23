// M1---Converting Fahrenheit temperatures to Celsius:
const fahrenheitTemperatures = [32, 68, 86, 104];

const celsiusTemperatures = fahrenheitTemperatures.map(temp => (temp - 32) * (5 / 9));

console.log(celsiusTemperatures); // Output: [0, 20, 30, 40]

// M2---Extracting values from objects in an array:
const products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 }
];

const productNames = products.map(product => product.name);

console.log(productNames); // Output: ["Apple", "Banana", "Orange"]
// M3---Formatting data for display:

const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Alice', lastName: 'Johnson' }
];

const formattedUsers = users.map(user => `${user.firstName} ${user.lastName}`);

console.log(formattedUsers); // Output: ["John Doe", "Jane Smith", "Alice Johnson"]
// M4---  Generating HTML elements dynamically:
const fruits = ['Apple', 'Banana', 'Orange'];

const fruitListItems = fruits.map(fruit => `<li>${fruit}</li>`);

console.log(fruitListItems);
// Output:
// ["<li>Apple</li>", "<li>Banana</li>", "<li>Orange</li>"]
// M5--- Summing arrays element-wise:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const sumArray = array1.map((num, index) => num + array2[index]);

console.log(sumArray); // Output: [5, 7, 9]
// M6--- Filtering and mapping simultaneously:
const numbers = [1, 2, 3, 4, 5];

const filteredAndMapped = numbers
    .filter(num => num % 2 === 0) // Filter out even numbers
    .map(num => num * 2); // Double each remaining number

console.log(filteredAndMapped); // Output: [4, 8]
// M7--- Extracting specific properties from an array of objects:
const users_1 = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Alice', age: 35 }
];

const userNames = users_1.map(user => user.name);

console.log(userNames); // Output: ["John", "Jane", "Alice"]
// M8 ---   Converting strings to objects:
const strings = ['apple', 'banana', 'orange'];

const objects = strings.map(str => ({ name: str, length: str.length }));

console.log(objects);
// Output:
// [
//   { name: 'apple', length: 5 },
//   { name: 'banana', length: 6 },
//   { name: 'orange', length: 6 }
// ]
// M9--- Using map with asynchronous operations (e.g., fetching data from an API):
const userIds = [1, 2, 3];

const getUserData = async userId => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await response.json();
    return userData;
};

const fetchUserData = async () => {
    const userDataArray = await Promise.all(userIds.map(id => getUserData(id)));
    console.log(userDataArray);
};

fetchUserData();
// M10---Generating a new array with indices:
const numbers_1 = [10, 20, 30, 40, 50];

const arrayWithIndices = numbers_1.map((num, index) => `${index}: ${num}`);

console.log(arrayWithIndices);
// Output: ["0: 10", "1: 20", "2: 30", "3: 40", "4: 50"]
// M11---Capitalizing the first letter of each word in a string:
const sentences = ['hello world', 'goodbye cruel world'];

const capitalizedSentences = sentences.map(sentence => {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
});

console.log(capitalizedSentences);
// Output: ["Hello World", "Goodbye Cruel World"]

// M12---Performing complex transformations on objects:
const products_2 = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 }
];

const discountedProducts = products_2.map(product => {
    const { id, name, price } = product;
    const discountedPrice = price * 0.9; // 10% discount
    return { id, name, price: discountedPrice };
});

console.log(discountedProducts);
// Output:
// [
//   { id: 1, name: 'Apple', price: 1.791 },
//   { id: 2, name: 'Banana', price: 0.891 },
//   { id: 3, name: 'Orange', price: 2.241 }
// ]
