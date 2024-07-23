// Callback Hell in JavaScript
// JavaScript is an asynchronous (non-blocking) and single-threaded programming language, meaning only one process can be run at a time.

// In programming languages, callback hell generally refers to an ineffective way of writing code with asynchronous calls. It is also known as the Pyramid of Doom.

// The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. It reduces code readability and maintenance. The callback hell situation typically occurs when dealing with asynchronous request operations, such as making multiple API requests or handling events with complex dependencies.
// here's an example of callback hell in JavaScript:


// asyncOperation1(function (result1) {
//     asyncOperation2(result1, function (result2) {
//         asyncOperation3(result2, function (result3) {
//             asyncOperation4(result3, function (result4) {
//                 asyncOperation5(result4, function (result5) {
//                     // More nested callbacks...
//                 });
//             });
//         });
//     });
// });

// In this example, each asynchronous operation depends on the result of the previous one, leading to deeply nested callback functions. This structure makes the code difficult to read, understand, and maintain. Additionally, as more asynchronous operations are added, the nesting becomes even deeper, exacerbating the problem.

//Example-2---
// In real-life JavaScript development, callback hell often arises in scenarios where you're dealing with multiple asynchronous tasks that depend on each other or need to be executed sequentially. Let's consider a scenario where you're building a web application that fetches data from multiple APIs and performs various operations on the data. Here's a simplified example:


// getDataFromAPI1(function (response1) {
//     processData(response1, function (processedData1) {
//         getDataFromAPI2(processedData1, function (response2) {
//             processData(response2, function (processedData2) {
//                 getDataFromAPI3(processedData2, function (response3) {
//                     processData(response3, function (processedData3) {
//                         // More nested callbacks...
//                     });
//                 });
//             });
//         });
//     });
// });

//Explanation- In this scenario:

// We first fetch data from API 1.
// Once the data is received, we process it.
// Then, we use the processed data to fetch data from API 2.
// Again, we process the data from API 2.
// Finally, we fetch data from API 3 and process it.
// As you can see, each step depends on the result of the previous one, leading to deeply nested callbacks. This structure makes the code harder to read, maintain, and debug.

// Callback hell becomes even more apparent in more complex scenarios involving error handling, retries, or additional asynchronous tasks. The resulting code can quickly become unwieldy and difficult to manage.

// Demo
function getData(dataId, getNextData) {
    // 2 sec
    setTimeout(() => {
        console.log('Data =', dataId);
        if (getNextData) {
            getNextData();
        }

    }, 2500);
}
console.log('fetching data...');
getData(1, function () {
    setTimeout(() => {
        console.log('fetching data 2....');
    }, 2000);
    // console.log('fetching data 2....');
    getData(2, function () {
        setTimeout(() => {
            console.log('fetching data 3....');
        }, 2000);
        // console.log('fetching data 3....');
        getData(3, function () {
            setTimeout(() => {
                console.log('fetching data 4....');
            }, 2000);
            // console.log('fetching data 4....');
            getData(4, function () {
                setTimeout(() => {
                    console.log('fetching data 5....');
                }, 2000);
                // console.log('fetching data 5....');
                getData(5)
                // console.log('Done.....!');
            })
        })
    })
});


// getData(3);
// getData(4, function () {
//     getData(5);
// });




