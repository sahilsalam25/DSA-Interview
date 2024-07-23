let str = 'sahil';
// str = 'mom'
let revStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
    console.log(str[i]);
}
console.log(`Reveresed Value of  String ${str} is : ${revStr} `);
// console.log(revStr);