function isArmstrongNumber(number) {
    // Convert the number to a string to count its digits
    const numStr = number.toString();
    const numDigits = numStr.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(numStr[i]), numDigits);
    }

    // Check if the sum is equal to the original number
    return sum === number;
}

// Example usage
const number = 153;
if (isArmstrongNumber(number)) {
    console.log(number, " is an Armstrong number.");
} else {
    console.log(number, " is not an Armstrong number.");
}