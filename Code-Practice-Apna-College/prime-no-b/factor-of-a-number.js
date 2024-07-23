function findFactor(number) {
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            console.log(i);
        }

    }
}
console.log(findFactor(20));
findFactor(16);
findFactor(9);