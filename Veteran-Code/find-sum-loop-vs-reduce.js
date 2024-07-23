let array = [1, 2, 3, 4, 5]; // 15
// M1--- Using Loop
function findSumUsingLoop(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];

    }
    return sum;

}
console.log('Sum Using Loop =', findSumUsingLoop(array));
// M2--- Using reduce:
let Result = array.reduce((accumulator, current) => {
    accumulator = accumulator + current;
    return accumulator;
}, 0);
console.log('Sum Using reduce =', Result);
// Here current=array[index];
// Here accumulator=sum;