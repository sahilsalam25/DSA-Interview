function printArmstrongNumber() {

    for (let i = 1; i <= 1000; i++) {
        let sum = 0;
        let temp = i;
        let numDigits = i.toString().length;
        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, numDigits);
            temp = Math.floor(temp / 10);
        }
        if (sum == i) {
            console.log(i);

        }
    }
}
printArmstrongNumber();


//M2 ------
function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
    const numberOfDigits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numberOfDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

function displayArmstrongNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (isArmstrongNumber(i)) {
            console.log(i);
        }
    }
}

displayArmstrongNumbers(10, 1000);

