// ----------------------------------------task1--------------------------------------------------------
function task1() {
    // a. Store correct password in a JS variable
const correctPassword = "mySecretPassword";

// b. Ask user to enter his/her password
let userPassword = prompt("Enter your password:");

// c. Validate the two passwords

// i. Check if user has entered a password
if (userPassword === null || userPassword === "") {
    alert("Please enter your password.");
} else {
    // ii. Check if both passwords are the same
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
    }
}
}
// ----------------------------------------task2--------------------------------------------------------
function task2(){
    let greeting;
    let hour = 13; // Set the current hour

    // Check if the hour is less than 18 (6 PM)
    if (hour < 18) {
        greeting = "Good day"; // If the condition is true, set greeting to "Good day"
    } else {
        greeting = "Good evening"; // If the condition is false, set greeting to "Good evening"
    }

    // Display the greeting
    console.log(greeting);
}
// ----------------------------------------task3--------------------------------------------------------
function task3(){
    // Take input from the user
let timeInput = prompt("Enter time in 24-hour format (e.g., 1900):");

// Ensure the input is a number and within the valid range
if (isNaN(timeInput) || timeInput.length !== 4 || timeInput < 0 || timeInput > 2359) {
    alert("Invalid time. Please enter a valid time in 24-hour format (e.g., 1900).");
} else {
    // Extract hours and minutes from the input
    let hours = parseInt(timeInput.substring(0, 2));
    let minutes = parseInt(timeInput.substring(2, 4));
    let period = "AM";
    let formattedHours;

    // Convert to 12-hour format
    if (hours >= 0 && hours < 12) {
        if (hours === 0) {
            formattedHours = 12; // Midnight case
        } else {
            formattedHours = hours;
        }
    } else if (hours === 12) {
        period = "PM"; // Noon case
        formattedHours = 12;
    } else if (hours > 12 && hours <= 23) {
        period = "PM";
        formattedHours = hours - 12;
    }

    // Format the minutes to always be two digits
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // Display the formatted time
    alert("The time in 12-hour format is: " + formattedHours + ":" + formattedMinutes + " " + period);
}
}
       