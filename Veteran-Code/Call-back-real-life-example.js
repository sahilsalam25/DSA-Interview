// Real-Life Examples:

// Loading images on a website: When you load a website, images can take a while to load, especially if they’re large. If images were loaded synchronously, the website would freeze and wait for each image to load before continuing. With callbacks, you can load the images asynchronously, which means that the website continues to load while the images are being loaded in the background.

// Handling form submissions: When a user submits a form, it takes time to process the data and send it to the server. If the form submission was executed synchronously, the user would have to wait for the data to be processed and sent before the form can be submitted. With callbacks, you can handle the form submission asynchronously, which means that the user can continue to interact with the form while the data is being processed and sent in the background.
// Example-1
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function () {
        callback("Operation complete");
    }, 1000);
}

// Define the callback function
function callbackFunction(result) {
    console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);


//   Explanation:

// We first define a mainFunction that takes a callback as an argument.
// The mainFunction uses setTimeout to simulate an asynchronous operation. The setTimeout function takes two arguments: a callback function and a delay time in milliseconds.
// The setTimeout function calls the callback function with the result of the operation after the specified delay time.
// We then define a callbackFunction that logs the result of the operation.
// Finally, we call the mainFunction with the callbackFunction as its argument.

// Example-2---Here's a real-life example using callbacks in JavaScript to handle asynchronous operations like fetching data from an API and updating the UI accordingly:

// Simulating an asynchronous API request to fetch user data
function fetchUserData(userId, callback) {
    // Simulating a network delay with setTimeout
    setTimeout(function () {
        const userData = { id: userId, name: 'John Doe', age: 30 };
        // Call the callback function with the fetched user data
        callback(null, userData); // Pass null for error and user data
    }, 2000); // Simulating a delay of 2 seconds
}

// Callback function to handle the fetched user data
function handleUserData(error, userData) {
    if (error) {
        console.error('Error fetching user data:', error);
        return;
    }
    console.log('User data:', userData);
    // Update the UI with the fetched user data
    updateUserProfile(userData);
}

// Function to update user profile in the UI
function updateUserProfile(userData) {
    // Update UI elements with user data
    console.log('Updating user profile in the UI:', userData);
}

// Fetch user data with user ID 123 and handle the result using callback
fetchUserData(123, handleUserData);
//Explanation of this code...
// Let's break down the code and understand the concept of callbacks in the context of this example:

// fetchUserData Function: This function simulates an asynchronous API request to fetch user data. It takes two arguments:

// userId: The ID of the user whose data is to be fetched.
// callback: A function that will be called once the data is fetched or if an error occurs during the process.
// handleUserData Function (Callback): This function is passed as the callback to fetchUserData. Its purpose is to handle the result of the asynchronous operation. It takes two parameters:

// error: An error object, if an error occurred during the data fetching process. If no error occurred, this parameter will be null.
// userData: The user data fetched from the API. This parameter will be null if an error occurred.
// updateUserProfile Function: This function is responsible for updating the user profile in the UI with the fetched user data.

// Usage of Callbacks:

// We call the fetchUserData function with a user ID (123) and pass handleUserData as the callback function. This means that once the user data is fetched or if an error occurs, handleUserData will be invoked with the appropriate parameters.
// Inside fetchUserData, after the simulated delay, we invoke the callback function (handleUserData) and pass null for the error (since no error is simulated) and the fetched userData.
// In summary, a callback is a function that is passed as an argument to another function and gets executed at a later time, usually after the completion of an asynchronous operation. In this example, handleUserData is a callback function passed to fetchUserData to handle the fetched user data or any potential errors. This allows us to write non-blocking code and handle asynchronous operations effectively in JavaScript.  
