// Qs5. Write a JavaScript function to generate a random number within a range (start,end).
//     ex- range(2,5)
// start=2, end=5, diff= 3
// M1-----
let randomNumber = Math.floor(Math.random() * 4) + 2; //it will give random number from 2 to 5 
console.log(`Random Number from 2 to 5 = `, randomNumber);
console.log(Math.floor(Math.random() * 4)); //it will give random number from 0 to 3 

// M2------
let start = 15;
let end = 20;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(`random Number =`, generateRandom(15, 20)); //it will give random number from 15 to 19 
