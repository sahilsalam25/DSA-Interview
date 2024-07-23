// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// answerwer = “abcdefgh”
// M1---------
// let str= 'abcdabcdefgggh';
// let strDemo = 'ababaaacdefgggjhhddkscssc1123556678944';
let strDemo = 'sahil salam';
console.log(strDemo.indexOf('s'));
let answer = '';
for (let i = 0; i < strDemo.length; i++) {
    let currStr = strDemo[i];
    // console.log(`1st answer`, answer);
    // console.log(`old curr str =`, currStr);
    if (answer.indexOf(currStr) == -1) {
        // console.log(`new curr str =`, currStr);
        // console.log(answer.indexOf(currStr));
        // console.log(`2nd answer`, answer);
        answer += currStr;
        // console.log(`final answer=`, answer);
    }
    // console.log(`unique str =`, answer);
}
console.log(`unique str =`, answer);

// M2--------
// let str = "abcdabcdefgggh123112233154643345556";
let str = 'sahil salam'
//function to get String with all unique elements
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            //if current character is not added, then add it in ans.
            //Otherwise it is a duplicate.
            ans += currChar;
        }
        // console.log(ans);
    }
    // console.log(ans); both are related if we console it then we have call a function  // getUnique(str);
    return ans;  // but we return a variable then we have to connsole it outer function ex- console.log( getUnique(str));

    // if we want the final value from any function then we have to return that variable in this case return ans:
    // but if we want to print all occurence from any function then we have to console.log it for ex 
    // here we cant use return statement because return statement will only give 1st occurence i.e final value > 5 = 8.... it will npot execute the further array element 9,10,111, etc 
    // so that why here is used console.log it will print one by one all number which is > 5
}
// getUnique(str);
// console.log(`final Unique string value = `, getUnique(str));
