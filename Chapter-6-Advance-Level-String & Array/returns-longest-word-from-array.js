// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"
// M1-----
// if (largestCountry.length < country[i].length) // this logic is implemented by me...
const country = ['India', '0123456789', '123456789987654321-Kuwait States', '123456-9876543211234567890', '9876543211234567890-', 'Kuwait States of Emirates UAE', "Australia", "Germany", "United States of America",]
let largestCountry = country[0];
// console.log(largestCountry);
for (let i = 0; i < country.length; i++) {
    // console.log(`--------`, country.length, country[i]);
    if (largestCountry.length < country[i].length) {
        largestCountry = country[i];
    }
}
console.log(`Largest Country =`, largestCountry);


// M2-------
// let country = ["Australia", "Germany", 'Kuwait States of Emirates KSOE', "United States of America"];
// function longestName(country) {
//     let ansIdx = 0;
//     for (let i = 0; i < country.length; i++) {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if (currLen > ansLen) {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(`Longest Country Name =`, longestName(country));

