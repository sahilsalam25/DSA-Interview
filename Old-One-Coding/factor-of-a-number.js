function findFactor(number) {
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            console.log(i);
        }

    }
}
console.log('factor of 20 ');
findFactor(20);
console.log('factor of 16 ');
findFactor(16);