//In JavaScript, the reduce() method is used to apply a function to each element in an array and reduce the array to a single value. This method iterates through the array and accumulates a single result, using the provided function.
// Here's the syntax:
// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// callback: A function that is called for each element in the array, taking four arguments:
// accumulator: The accumulated result.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): A value to use as the initial value of the accumulator. If not provided, the first element of the array will be used as the initial value.
// Here's a simple example to sum up the values of an array using reduce():
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
// In this example:

// The initial value of the accumulator is 0.
// The callback function (accumulator, currentValue) => accumulator + currentValue adds the current value to the accumulator.
// The reduce() method iterates through each element of the numbers array, adding its value to the accumulator.
// Finally, it returns the sum of all elements in the array.
// M1---Summing an Array of Numbers:
const numbers1 = [1, 2, 3, 4, 5];

const sum1 = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
// M2--- Flattening an Array of Arrays:
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
// M3---Counting Instances of Values in an Array:
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

console.log(fruitCount); // Output: {apple: 3, banana: 2, orange: 1}
// M4--- Flattening and Summing Nested Arrays:
const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flattenedSum = nestedArrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(flattenedSum); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6)
// M5--- Grouping Objects by a Property:
const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
    { category: 'A', value: 30 },
    { category: 'B', value: 40 },
];

const groupedData = data.reduce((accumulator, currentValue) => {
    (accumulator[currentValue.category] = accumulator[currentValue.category] || []).push(currentValue);
    return accumulator;
}, {});

console.log(groupedData);
// Output:
// {
//   A: [ { category: 'A', value: 10 }, { category: 'A', value: 30 } ],
//   B: [ { category: 'B', value: 20 }, { category: 'B', value: 40 } ]
// }
// M6--- Finding the Maximum Value in an Array:
const numbers2 = [5, 2, 8, 1, 6];

const max = numbers2.reduce((maxValue, currentValue) => {
    return Math.max(maxValue, currentValue);
}, -Infinity);

console.log(max); // Output: 8
// M7--- Checking if All Elements Satisfy a Condition:
const numbers3 = [10, 20, 30, 40, 50];

const allGreaterThanFive = numbers3.reduce((accumulator, currentValue) => {
    return accumulator && currentValue > 5;
}, true);

console.log(allGreaterThanFive); // Output: true
// M8---Converting Array of Strings to Object:
const fruits1 = ['apple', 'banana', 'orange'];

const fruitObject = fruits1.reduce((obj, fruit, index) => {
    obj[fruit] = index;
    return obj;
}, {});

console.log(fruitObject);
// Output: { apple: 0, banana: 1, orange: 2 }

// M9--- Transforming Array of Objects:
const items = [
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 3 },
    { name: 'Orange', price: 4 }
];

const totalPrice = items.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log(totalPrice); // Output: 9
// M10--- Removing Duplicates from an Array:
const numbers4 = [1, 2, 3, 2, 4, 3, 5];

const uniqueNumbers = numbers4.reduce((unique, number) => {
    if (!unique.includes(number)) {
        unique.push(number);
    }
    return unique;
}, []);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// M11--- Flattening an Array of Objects and Summing a Specific Property:
const transactions = [
    { category: 'food', amount: 50 },
    { category: 'clothing', amount: 100 },
    { category: 'food', amount: 30 },
    { category: 'electronics', amount: 200 }
];

const totalSpentOnFood = transactions.reduce((total, transaction) => {
    if (transaction.category === 'food') {
        return total + transaction.amount;
    }
    return total;
}, 0);

console.log(totalSpentOnFood); // Output: 80
// M12--- Finding the Longest Word in a Sentence:
const sentence = 'The quick brown fox jumps over the lazy dog';

const longestWord = sentence.split(' ').reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
}, '');

console.log(longestWord); // Output: 'quick'
// M13--- Flattening and Sorting Arrays:
const arrays2 = [[3, 2, 1], [6, 5, 4], [9, 8, 7]];

const sortedFlatArray = arrays2.reduce((flat, arr) => flat.concat(arr), []).sort((a, b) => a - b);

console.log(sortedFlatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// M14--- Calculating Factorial of a Number:
const factorial = (num) => {
    return Array.from({ length: num }, (_, i) => i + 1).reduce((result, value) => result * value, 1);
};

console.log(factorial(5)); // Output: 120 (1 * 2 * 3 * 4 * 5)
// M15--- Grouping Elements by a Criterion into a Map:
const words = ['apple', 'banana', 'car', 'cat', 'dog', 'elephant'];

const groupedByLength = words.reduce((groups, word) => {
    const length = word.length;
    if (!groups.has(length)) {
        groups.set(length, []);
    }
    groups.get(length).push(word);
    return groups;
}, new Map());

console.log(groupedByLength);
// Output: Map(3) {
//            5 => [ 'apple', 'banana' ],
//            3 => [ 'car', 'cat', 'dog' ],
//            8 => [ 'elephant' ]
//        }

//M16--- Counting Vowels in a String:
const sentence2 = 'The quick brown fox jumps over the lazy dog';

const vowelCount = sentence2.split('').reduce((count, char) => {
    if ('aeiouAEIOU'.includes(char)) {
        count++;
    }
    return count;
}, 0);

console.log(vowelCount); // Output: 11
// M17--- Finding the Average of an Array of Numbers:
const numbers_1 = [10, 20, 30, 40, 50];

const average = numbers_1.reduce((sum, number, index, array) => {
    sum += number;
    if (index === array.length - 1) {
        return sum / array.length;
    }
    return sum;
}, 0);

console.log(average); // Output: 30
// M18---Checking if All Elements in an Array are Equal:
const array1 = [1, 1, 1, 1, 1];
const array2 = [1, 1, 2, 1, 1];

const allEqual1 = array1.reduce((result, element) => result && element === array1[0], true);
console.log(allEqual1); // Output: true

const allEqual2 = array2.reduce((result, element) => result && element === array2[0], true);
console.log(allEqual2); // Output: false
// M20--- Finding the Frequency of Each Word in a Sentence:
const sentence_2 = 'the quick brown fox jumps over the lazy dog';

const wordFrequency = sentence_2.split(' ').reduce((frequency, word) => {
    frequency[word] = (frequency[word] || 0) + 1;
    return frequency;
}, {});

console.log(wordFrequency);
// Output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
// M20--- Finding the Maximum Occurring Element in an Array:
const array = [2, 3, 3, 5, 7, 5, 2, 7, 7, 7];

const maxOccurringElement = array.reduce((maxElement, currentElement) => {
    const elementCount = array.filter(element => element === currentElement).length;
    return (elementCount > maxElement.count) ? { element: currentElement, count: elementCount } : maxElement;
}, { element: null, count: -1 }).element;

console.log(maxOccurringElement); // Output: 7
// M21--- Checking for Palindromes:
const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
};

const words_2 = ['level', 'hello', 'racecar', 'apple'];

const palindromeCount = words_2.reduce((count, word) => {
    return isPalindrome(word) ? count + 1 : count;
}, 0);

console.log(palindromeCount); // Output: 2
// M22---Calculating Power of a Number:
const calculatePower = (base, exponent) => {
    return Array.from({ length: exponent }, () => base).reduce((result, value) => result * value, 1);
};

console.log(calculatePower(2, 5)); // Output: 32 (2^5)
// M23---Merging Objects in an Array:
const data_1 = [
    { id: 1, name: 'John' },
    { id: 2, age: 30 },
    { id: 3, city: 'New York' }
];

const mergedObject = data_1.reduce((merged, obj) => {
    return { ...merged, ...obj };
}, {});

console.log(mergedObject);
// Output: { id: 3, name: 'John', age: 30, city: 'New York' }
// M24--- Removing Duplicates from an Array of Objects based on a Property:
const people = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Alice' }
];

const uniquePeople = people.reduce((unique, person) => {
    const existingPerson = unique.find(p => p.id === person.id);
    if (!existingPerson) {
        unique.push(person);
    }
    return unique;
}, []);

console.log(uniquePeople);
// Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' } ]
// M25--- Finding Common Elements in Arrays:
const Arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

const commonElements = Arrays.reduce((common, arr) => {
    return common.filter(element => arr.includes(element));
}, arrays[0]);

console.log(commonElements); // Output: [3]
// M26--- Generating a Fibonacci Sequence:
const fibonacci = (num) => {
    return Array.from({ length: num }).reduce((sequence, _, i) => {
        if (i <= 1) {
            sequence.push(i);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }, []);
};

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// M27--- Calculating Intersection of Two Arrays:
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [3, 4, 5, 6, 7];

const intersection = Array1.reduce((intersect, element) => {
    if (Array2.includes(element)) {
        intersect.push(element);
    }
    return intersect;
}, []);

console.log(intersection); // Output: [3, 4, 5]
// M28--- Implementing Map Function Using Reduce:
const customMap = (array, callback) => {
    return array.reduce((result, element) => {
        result.push(callback(element));
        return result;
    }, []);
};

const Numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(Numbers1, num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
