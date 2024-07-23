

function factorial(num) {
    let fact = 1;
    if (num == 0 && num == 1) {
        return 1;
    }
    else {
        for (let i = 1; i <= num; i++) {
            var result = fact * i;
            // console.log(fact, i);

            // return result;
        }
        // console.log(result);
        return result;
    }

}

console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(1));

console.log(factorial(5));

console.log(factorial(6));


