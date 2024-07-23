let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use Reduce method to sum
// Method -1 BY defining a function outside:
const SUM = (sum, n) => {
    return sum + n;
}
const sumOfNum = num.reduce(SUM);
console.log(sumOfNum);

// Method 2 By Passing direct to reduce function:
const SUM_NUM = num.reduce((sum, n) => {
    return sum + n;
});
console.log(`Value of sum is : `, SUM_NUM);
// Use Reduce method to sub
const subOfNum = num.reduce((sub, n) => {
    return sub - n;
});
console.log(`Value of sub is : `, subOfNum);
// Use Reduce method to Multiply
const mulOfNum = num.reduce((mul, n) => {
    return mul * n;
});
console.log(`Value of mul is : `, mulOfNum);

// Use Reduce method to Divide:
const divOfNum = num.reduce((div, n) => {
    let result = parseFloat(div / n)
    return result;
});
console.log(`Value of div is : `, divOfNum);