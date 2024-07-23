// In JavaScript, promises are objects used for asynchronous programming. They represent a value that may be available now, in the future, or never. Promises are commonly used when dealing with operations that take time to complete, such as fetching data from a server, reading a file, or executing a time-consuming computation.

// The main advantage of promises is that they provide a cleaner and more manageable way to handle asynchronous code compared to traditional callback-based approaches. Instead of nesting multiple callbacks within each other (callback hell), promises allow you to chain asynchronous operations together in a more readable and structured manner.

// A promise can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise now has a value.
// Rejected: The operation failed, and the promise has a reason for the failure.
// 1. then(): This method is used to handle the successful fulfillment of the promise. It takes one or two optional callbacks: one for the success case and one for the failure case.
// someAsyncOperation()
//   .then((result) => {
// Handle successful fulfillment
//     console.log(result);
//   })
//   .catch((error) => {
// Handle rejection or any errors
//     console.error(error);
//   });

// 2. catch(): This method is used to handle errors or rejections that may occur during the promise chain.


// someAsyncOperation()
//   .then((result) => {
//     // Handle successful fulfillment
//     console.log(result);
//   })
//   .catch((error) => {
//     // Handle rejection or any errors
//     console.error(error);
//   });


//  Example - Here's a simple program that uses promises to simulate fetching data from an API after a delay:
// Function to simulate fetching data from an API after a delay
// Function to fetch data from an API
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1') // Using JSONPlaceholder as an example API
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Using the promise to fetch and process data
fetchDataFromAPI()
    .then((data) => {
        // Display the fetched data
        console.log("Fetched Data:", data);
    })
    .catch((error) => {
        // Handle any errors that occurred during fetching
        console.error("Error:", error);
    });








// Example-1---
// const promise = () =>
//     new Promise((resolve, reject) => {
//         const num = Math.random();
//         console.log('Number =', num);
//         if (num >= 0.5) {
//             resolve("Promise is fulfilled!");
//         } else {
//             reject("Promise failed!");
//         }
//     }).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log('some error =', error);
//     })
// console.log(promise());
