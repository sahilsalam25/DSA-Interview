// The finally block contains code that will always execute, regardless of whether an error occurred or not. 
// This is useful for cleanup tasks or actions that need to be performed regardless of the outcome of the try block.
// The finally block will execute even if:

// An error occurs within the try block and is caught by the catch block.
// No error occurs and the try block completes successfully.

try {
    // Code that might throw an error
    console.log("Inside try block");
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error);
} finally {
    // Code that will always execute, regardless of whether an error occurred or not
    console.log("Inside finally block");
}
// Another Example  
try {
    // Code that might throw an error
    // For example:
    console.log("Inside try block");
    throw new Error("An error occurred");
} catch (error) {
    // Code to handle the error
    // For example:
    console.error("An error occurred:", error);
} finally {
    // Code that will always execute, regardless of whether an error occurred or not
    // For example:
    console.log("Inside finally block");
}
