// Below are several examples of using the filter method in JavaScript:
// M1--- Filtering an array of numbers to get only even numbers:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
// M2--- Filtering an array of objects based on a condition:
const persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

const adults = persons.filter(person => person.age >= 21);
console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
// M3---  Filtering out null or undefined values from an array:
const values = [1, null, 2, undefined, 3, 4, null];
const filteredValues = values.filter(value => value !== null && value !== undefined);
console.log(filteredValues); // Output: [1, 2, 3, 4]
// M4--- Filtering strings based on a condition:
const words = ['hello', 'world', 'javascript', 'filter'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ['javascript', 'filter']
// M5--- Filtering an array based on multiple conditions:
const products = [
    { name: 'Laptop', price: 1000, brand: 'Apple' },
    { name: 'Smartphone', price: 800, brand: 'Samsung' },
    { name: 'Tablet', price: 500, brand: 'Apple' }
];

const appleProductsUnder1000 = products.filter(product => product.brand === 'Apple' && product.price < 1000);
console.log(appleProductsUnder1000); // Output: [{ name: 'Tablet', price: 500, brand: 'Apple' }]
// M6---   Filtering an array of strings to remove elements containing a specific substring:
const words1 = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const filteredWords = words1.filter(word => !word.includes('a'));
console.log(filteredWords); // Output: ['kiwi', 'grape']
// M7--- Filtering an array of objects based on multiple conditions using the logical OR (||) operator:
const products1 = [
    { name: 'Laptop', price: 1000, brand: 'Apple' },
    { name: 'Smartphone', price: 800, brand: 'Samsung' },
    { name: 'Tablet', price: 500, brand: 'Apple' }
];

const expensiveOrAppleProducts = products1.filter(product => product.price > 900 || product.brand === 'Apple');
console.log(expensiveOrAppleProducts); // Output: [{ name: 'Laptop', price: 1000, brand: 'Apple' }]
// M8--- Filtering an array of numbers to get only prime numbers:
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers_1.filter(isPrime);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
// M9--- Filtering an array of objects based on the absence of a specific property:

const users = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Charlie' }
];

const usersWithName = users.filter(user => 'name' in user);
console.log(usersWithName); // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie' }]
// M10--- Filtering an array of strings to include only those starting with a specific letter:
const words2 = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const startsWithB = words2.filter(word => word.startsWith('b'));
console.log(startsWithB); // Output: ['banana']
// M11---Filtering an array of objects based on a range of values:
const products_2 = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 500 }
];

const affordableProducts = products_2.filter(product => product.price >= 500 && product.price <= 1000);
console.log(affordableProducts); // Output: [{ name: 'Laptop', price: 1000 }, { name: 'Smartphone', price: 800 }, { name: 'Tablet', price: 500 }]
// M12--- Filtering an array of objects to include only unique values based on a specific property:
const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'Alice' }
];

const uniqueStudents = students.filter((student, index, self) => self.findIndex(s => s.id === student.id) === index);
console.log(uniqueStudents); // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Alice' }]
// M13---  Filtering an array of strings to remove empty strings: 
const words_3 = ['apple', '', 'banana', '', 'kiwi', 'orange', ''];
const nonEmptyWords = words_3.filter(word => word.trim() !== '');
console.log(nonEmptyWords); // Output: ['apple', 'banana', 'kiwi', 'orange']
// M14--- Filtering an array of objects based on the length of a specific property:
const Stories = [
    { title: 'Rabbit & Tor', duration: 148 },
    { title: 'Lion The forest king', duration: 165 },
    { title: 'The Shore', duration: 152 }
];

const longStories = Stories.filter(story => story.duration > 150);
console.log(longStories); // Output: [{ title: 'Interstellar', duration: 169 }, { title: 'The Dark Knight', duration: 152 }]
// M15--- Filtering an array of strings to include only palindromes:
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const Words = ['level', 'apple', 'radar', 'banana', 'civic'];
const palindromes = Wordsords.filter(isPalindrome);
console.log(palindromes); // Output: ['level', 'radar', 'civic']
// M16---Filtering an array of objects based on the absence of a specific value:
const Users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie' }
];

const usersWithRole = Users.filter(user => user.role !== undefined);
console.log(usersWithRole); // Output: [{ name: 'Alice', role: 'admin' }, { name: 'Bob', role: 'user' }]
// M17---Filtering an array of numbers to get only unique values:
const Numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = Numbers.filter((number, index, array) => array.indexOf(number) === index);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
// M18--- Filtering an array of objects based on a nested property:

const Students = [
    { name: 'Alice', grades: { math: 85, science: 90 } },
    { name: 'Bob', grades: { math: 75, science: 80 } },
    { name: 'Charlie', grades: { math: 95, science: 88 } }
];

const highMathGrades = Students.filter(student => student.grades.math > 80);
console.log(highMathGrades); // Output: [{ name: 'Alice', grades: { math: 85, science: 90 } }, { name: 'Charlie', grades: { math: 95, science: 88 } }]
// M19--- Filtering an array of strings to include only those containing all vowels:
function containsAllVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.every(vowel => word.includes(vowel));
}

const Words_1 = ['apple', 'banana', 'kiwi', 'orange', 'euouae'];
const allVowelWords = Words_1.filter(containsAllVowels);
console.log(allVowelWords); // Output: ['euouae']
// M20--- Filtering an array of objects based on multiple nested conditions:
const Products = [
    { name: 'Laptop', specs: { brand: 'Apple', RAM: 8, SSD: true } },
    { name: 'Desktop', specs: { brand: 'Dell', RAM: 16, SSD: false } },
    { name: 'Tablet', specs: { brand: 'Samsung', RAM: 4, SSD: true } }
];

const highEndDevices = Products.filter(product => product.specs.RAM >= 8 && product.specs.SSD);
console.log(highEndDevices); // Output: [{ name: 'Laptop', specs: { brand: 'Apple', RAM: 8, SSD: true } }]
// M21--- Filtering an array of numbers to get only Fibonacci numbers:
function isFibonacci(number) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const fib = Math.round(Math.pow(phi, number) / sqrt5);
    return fib === number;
}

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fibonacciNumbers = numbers4.filter(isFibonacci);
console.log(fibonacciNumbers); // Output: [1, 2, 3, 5, 8]
