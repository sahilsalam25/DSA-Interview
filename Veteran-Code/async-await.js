// Async/await is a feature in JavaScript that allows you to work with asynchronous code in a more synchronous-like manner, making it easier to write and understand asynchronous code.

// Async Functions always return a promise. Await Keyword is used only in Async Functions to wait for promise.

// JS Async/Await is the extension of promises that we get as support in the language. In this article, we will be learning about async and await in JavaScript with examples.

// Async Function
// The Async function simply allows us to write promises-based code as if it were synchronous and it checks that we are not breaking the execution thread.
// Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.


// Await Keyword
// Await is used to wait for the promise. It could be used within the async block only.

// It makes the code wait until the promise returns a result.





// Example 1: Fetching User Data from a Public API
// In this example, we'll fetch user data from the JSONPlaceholder API, a free online REST API for testing and prototyping.


// async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         console.log('resp ok=', response.ok);
//         if (!response.ok) {

//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('User Data:', data);
//         // console.log('User Data:', response);
//     } catch (error) {
//         console.error('Error fetching user data:', error.message);
//     }
// }

// // Fetch data for user with ID 1
// console.log('fetching data...');
// fetchUserData(1);

// Example 2: Fetching and Displaying Multiple Users
// Here, we'll fetch data for multiple users and display their names.


async function fetchMultipleUsers(userIds) {
    try {
        const userPromises = userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`));
        const responses = await Promise.all(userPromises);

        // Check if all responses are OK
        responses.forEach(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        });

        const users = await Promise.all(responses.map(response => response.json()));
        users.forEach(user => {
            console.log('User:', user.name);
        });
    } catch (error) {
        console.error('Error fetching multiple users:', error.message);
    }
}

// Fetch data for users with IDs 1, 2, and 3
console.log('fetching data...');
fetchMultipleUsers([1, 2, 3]);