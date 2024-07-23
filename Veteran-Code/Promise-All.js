// Real-Life example 
// Function to fetch data from the first API
function fetchDataFromAPI1() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/2')
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

// Function to fetch data from the second API
function fetchDataFromAPI2() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/5')
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

// Fetch data from both APIs and process them
Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()])
    .then((results) => {
        // Process the data
        const processedData1 = results[0];
        const processedData2 = results[1];

        // Display the results
        console.log("Data from API 1:", processedData1);
        console.log("Data from API 2:", processedData2);
    })
    .catch((error) => {
        // Handle any errors that occurred during fetching or processing
        console.error("Error:", error);
    });