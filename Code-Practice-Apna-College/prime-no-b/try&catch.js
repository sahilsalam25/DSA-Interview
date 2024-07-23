setTimeout(() => {
    console.log('Hacking Wifi Password..... Please Wait ...')
}, 1000);
try {
    console.log(sahil);
}
catch (error) {
    // console.log(error);
    console.log('Error is found in the code,Error is -:', error);
}
setTimeout(() => {
    console.log(`Hacking Sahil's Insta Id & Password..... Please Wait ...`)

}, 2000);
setTimeout(() => {
    console.log('Hacking is Processing..... Please Wait ...')
}, 3000);
setTimeout(() => {
    console.log(`Hacked Sahil's Insta Id-@Sahilsalam780 & Password-abcd1234..... `)
}, 4000);
// finally {
//     console.log('finally block is executed after try & catch execution ')
// }


// Another example 
try {
    // Code that might throw an error
    // For example:
    let result = someFunctionThatMightThrowAnError();
    console.log(result);
} catch (error) {
    // Code to handle the error
    // For example:
    // There are four types of error message we can show.
    console.error("An error occurred:", error); // print the error
    console.error("An error occurred:", error.name); // print the error name
    console.error("An error occurred:", error.message); // print the error message
    console.error("An error occurred:", error.stack); // print the error description ...line no etc

}
// Another example 
try {
    let x = 1;
    let y = x.toUpperCase(); // This line will throw an error because toUpperCase() is not a function for a number
    console.log(y);
} catch (error) {
    console.error("An error occurred:", error);
}
