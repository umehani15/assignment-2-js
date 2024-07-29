// ----------------------------------------task1--------------------------------------------------------

// Store a secret number ranging from 1 to 10
function task1() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    
    // Prompt user to guess the secret number
    const userGuess = Number(prompt("Guess the secret number (between 1 and 10):"));
    
    // Check if the user's guess is correct or close enough
    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (userGuess + 1 === secretNumber) {
        alert("Close enough to the correct answer");
    } else if (userGuess - 1 === secretNumber) {
        alert("Close enough to the correct answer");
    } else {
        alert("Try again! The secret number was " + secretNumber);
    }
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
        // Prompt user to enter a number
    const userNumber = Number(prompt("Enter a number to check if it is divisible by 3:"));
    
    // Check if the number is divisible by 3
    if (userNumber % 3 === 0) {
        alert("The number " + userNumber + " is divisible by 3.");
    } else {
        alert("The number " + userNumber + " is not divisible by 3.");
    }
    
    }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Prompt user to enter a number
    const userNumber = Number(prompt("Enter a number to check if it is even or odd:"));
    
    // Check if the number is even or odd
    if (userNumber % 2 === 0) {
        alert("The number " + userNumber + " is even.");
    } else {
        alert("The number " + userNumber + " is odd.");
    }
    }
    
    // ----------------------------------------task4--------------------------------------------------------
    
    function task4() {
        // Prompt user to enter the temperature
    const temperature = Number(prompt("Enter the temperature:"));
    
    // Check the temperature and show the appropriate message
    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {
        alert("It's very cold outside!");
    }
    
    }