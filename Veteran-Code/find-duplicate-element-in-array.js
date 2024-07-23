// M1---
const findDuplicate = (arr) => {
    let sortedArray = arr.slice().sort();
    let result = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] == sortedArray[i]) {
            result.push(sortedArray[i])
        }

    }
    return result;
}
// let array = [1, 2, 3, 2, 4, 2, 3, 4];
let arr2 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log('Duplicate Elements in Array ', arr2, 'are ->', findDuplicate(arr2));
let Array1 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1, 4, 6, 5, 2];
// let Array1 = [1, 2, 1];
let result = [...new Set(Array1)];
// M2---
let result2 = Array.from(new Set(Array1));
// let result = new Set(Array1).size !== Array1.length;
console.log(Array1, '-----', result);
console.log('2nd', result2);