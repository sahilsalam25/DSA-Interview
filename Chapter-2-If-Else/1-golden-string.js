console.log(`A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.`);
let str = 'Amir Salam';
// if (str.indexOf('A') && (str.length > 5)) {
//     console.log('it is a golden string...');
// }
if ((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("golden string");
}
else {
    console.log('not a golden string');
}