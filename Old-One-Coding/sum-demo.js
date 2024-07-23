// function printSum(a = 4, b) {
//     return a + b;
// }
// console.log('sum = ', printSum(1, 2));
// let num = '15000';
// num = parseFloat(num / 1000);
// let value = num.join('.000');
// console.log(num);
// console.log(value);
// let Value = num.toFixed(3)
// console.log(Value);
// let finalValue = Value.split(3).join('');
// console.log(finalValue);

let number = 15000;

// Format the number without using inbuilt function
let formattedNumber = formatNumber(number, 3);

console.log(formattedNumber);  // Output: "15.000"

// Function to format the number
function formatNumber(num, decimalPlaces) {
    // Convert the number to a string
    let numStr = num.toString();

    // Split the string into whole and decimal parts
    let parts = numStr.split('.');

    // Add leading zeros to the decimal part if needed
    if (parts.length === 1) {
        parts.push('0'.repeat(decimalPlaces));
    } else {
        parts[1] = parts[1].padEnd(decimalPlaces, '0');
    }

    // Join the parts with a dot and return the formatted number
    return parts.join('.');
}
