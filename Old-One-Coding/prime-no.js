//program to check number is prime or not:
// let number = 90;
let result;
function isPrime(number) {
    if (number < 2) {
        return (`Given Number ${number} is Not a Prime Number`);
        // return false;
    }
    else if (number == 2) {
        return (`Given Number ${number} is  a Prime Number`)
    }
    else {
        for (let i = 2; i < number; i++) {


            if (number % i == 0) {
                return (`Given Number ${number} is Not a Prime Number`)

            }

            else {
                return (`Given Number ${number} is  a Prime Number`)
            }
        }
    }
}
// Prime Numbers are - 2,3,5,7,11,13,17,19,23,29,31,37,41....
console.log(isPrime(-1));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
result = isPrime(10);
console.log(result);



