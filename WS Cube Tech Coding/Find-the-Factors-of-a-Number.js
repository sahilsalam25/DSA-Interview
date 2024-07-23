// let number = 150;
// let number = 12;
function checkfactors(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i);
            // return i;
        }

    }
}
// console.log('6 ->');
// checkfactors(6);
// console.log('8 ->');
// checkfactors(8);
console.log('12 ->');
checkfactors(12);
// console.log('150 ->');
// checkfactors(150);
//M2--------
function findFactors(number) {
    const factors = [];
    const sqrtNum = Math.sqrt(number);
    console.log('sqrt =', sqrtNum);
    for (let i = 1; i <= sqrtNum; i++) {
        if (number % i === 0) {
            factors.push(i);
            if (i !== number / i) {
                factors.push(number / i);
            }
        }
    }
    return factors;
}

// Example usage
const number = 24;
const factors = findFactors(number);
console.log("Factors of ", number, "-> ", factors);
console.log('24--->', Math.sqrt(24));