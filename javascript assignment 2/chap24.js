// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Define the variable
    let num = 35.36;
    
    // Convert the number to a string and remove the dot
    let numAsString = num.toString().replace(".", "");
    
    // Display the result in an alert
    alert("Result: " + numAsString);
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Prompt the user for a username
    let username = prompt("Enter your username:");
    
    // Check if the username contains any special symbols
    if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
        // Prompt the user to enter a valid username
        alert("Please enter a valid username without special symbols [@, ., , !]");
    } else {
        // Display the username if it's valid
        alert("Username: " + username);
    }
    
    }
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Define the array
    let A = ["cake", "apple pie", "cookie", "chips", "patties"];
    
    // Prompt the user for input
    let userInput = prompt("Enter item to search:");
    
    // Perform case-insensitive search
    let found = false;
    for (let i = 0; i < A.length; i++) {
        if (userInput.toLowerCase() === A[i].toLowerCase()) {
            found = true;
            break;
        }
    }
    
    // Inform the user about the availability of the item
    if (found) {
        alert("Yes, '" + userInput + "' is found in the list.");
    } else {
        alert("No, '" + userInput + "' is not found in the list.");
    }
    
    }
    // ----------------------------------------task4--------------------------------------------------------
    
    function task4() {
    // Prompt the user for input
    let password = prompt("Enter your password:");
    
    // Check if the password meets the requirements
    let containsAlphabets = /[a-zA-Z]/.test(password);
    let containsNumbers = /[0-9]/.test(password);
    let startsWithAlphabet = /^[a-zA-Z]/.test(password);
    let isAtLeastSixCharactersLong = password.length >= 6;
    
    // Check if the password meets all requirements
    if (containsAlphabets && containsNumbers && startsWithAlphabet && isAtLeastSixCharactersLong) {
        alert("Password is valid.");
    } else {
        alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
    }
    
    }