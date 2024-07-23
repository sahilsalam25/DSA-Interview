let str = 'ammi';
let rev = '';
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (rev == str) {
    console.log('string is palindrom...');
}
else {
    console.log('string is not palindrome...');
}
console.log(str, '-> reverse string ->', rev);