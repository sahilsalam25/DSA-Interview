// Promise chaining in JavaScript allows you to sequentially execute asynchronous operations one after another, ensuring that each operation completes before the next one starts. This helps in writing cleaner and more readable asynchronous code compared to nested callbacks.

// Here's an example of promise chaining:


// Function to fetch data from an API
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
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

// Function to process the fetched data
function processData(data) {
    return new Promise((resolve, reject) => {
        // Simulate processing the data asynchronously
        setTimeout(() => {
            const processedData = { ...data, processed: true };
            resolve(processedData);
        }, 1000); // Simulating a delay of 1 second
    });
}

// Fetch data from the API and then process it
fetchDataFromAPI()
    .then(data => {
        // Process the fetched data
        return processData(data);
    })
    .then(processedData => {
        // Display the processed data
        console.log("Processed Data:", processedData);
    })
    .catch(error => {
        // Handle any errors that occurred during fetching or processing
        console.error("Error:", error);
    });
// Code explanation...
// In this example:

// We have two functions, fetchDataFromAPI and processData, each returning a promise.
// We use fetchDataFromAPI to fetch data from the API and then chain a .then() to it. Inside this .then() callback, we process the fetched data using the processData function.
// The processData function simulates processing the data asynchronously using setTimeout, and when the processing is complete, it resolves with the processed data.
// We chain another .then() to handle the processed data and display it.
// Any errors that occur during the promise chain are caught using .catch().
// Promise chaining allows you to compose complex asynchronous operations in a more concise and readable manner, making your code easier to understand and maintain.