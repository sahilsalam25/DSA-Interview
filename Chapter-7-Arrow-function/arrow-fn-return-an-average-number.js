// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
// M1---------
let arrayNumbers = [1, 2, 3, 4, 5];
const arrowAverageFunction = () => {

    let total = 0;

    arrayNumbers.map((num) => {

        total += num;
        // console.log('number =', num);
        // console.log('total =', num, '+', total, '= ', total);
        let averageArray = total / arrayNumbers.length;
        console.log(`Average of given numbers ${arrayNumbers} = `, averageArray);
        // return total;
    })
}
arrowAverageFunction();
// console.log(`----------`, arrowAverageFunction());


// M2--------
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        console.log(`numbers =`, number);
        console.log(`initial total =`, total);
        total += number;
        console.log(`final total =`, total);
    }
    return total / arr.length;
};
let arr = [1, 2, 3, 4, 5];
// console.log(`Average of given numbers ${arr} = `, arrayAverage(arr));