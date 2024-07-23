let Array = [2, 5, 1, 10, 55, 15];
let Max = 0;
// M1--- usinf for loop
for (let i = 0; i < Array.length; i++) {
    if (Array[i] > Max) {
        // console.log('Array[i]', Array[i]);
        Max = Array[i];
        // console.log('Max 1 =', Max);
        // 

    }
    // console.log('max 2', Max);
    // return Max;


}
console.log('Maximum using for loop =', Max);
// M2--- using forof loop

for (let num of Array) {
    // console.log('num =', num);
    // if (num > Max); {
    if (num > Max) {
        // console.log('Max if =', Max, 'num =', num);
        Max = num;
        // console.log('After Max 2 =', Max, 'num 2 =', num);
        // break; // if we use break on the first condition it will come out of loop

    }


}
// return Max;
console.log('final Maximum using forof loop =', Max);

