// let num = 10;
// M1----
// function isPrime(num) {
//     for (let index = 2; index < num; index++) {
//         if (num % index == 0) {
//             // console.log('index =', index);
//             // console.log('number =', num);
//             // console.log('index =', index);
//             return false
//         }

//     }
//     return true;
// }
// isPrime(11);
// console.log(isPrime(15));
// for (let i = 2; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }
// M2---here's a JavaScript code snippet to print prime numbers from 1 to 50:


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

for (let i = 2; i <= 50; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}













// console.log(isPrime(1));
// console.log(isPrime(2));

// console.log(isPrime(3));
// console.log(isPrime(4));

// console.log(isPrime(5));
// console.log(isPrime(6));

// console.log(isPrime(7));
// console.log(isPrime(8));

// console.log(isPrime(9));
// console.log(isPrime(10));

// console.log(isPrime(11));
// console.log(isPrime(12));
// console.log(isPrime(13));


// console.log(isPrime(14));
// console.log(isPrime(15));