// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Define the message
    let message = "Ali and Sami are best friends. They play cricket and football together.";
    
    // Replace all occurrences of "and" with "&"
    let replacedMessage = message.split("and").join("&");
    
    // Display the result in an alert
    alert("Original Message: " + message + "\nReplaced Message: " + replacedMessage);
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Define the string
    let stringNumber = "472";
    
    // Convert the string to a number
    let convertedNumber = Number(stringNumber);
    
    // Display the value and type in an alert
    alert("Value: " + convertedNumber + "\nType: " + typeof convertedNumber);
    
    }
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Prompt the user for input
    let userInput = prompt("Enter your text:");
    
    // Convert the input to uppercase
    let capitalizedText = userInput.toUpperCase();
    
    // Display the capitalized text
    alert("Capitalized Text: " + capitalizedText);
    
    }
    
    // ----------------------------------------task4--------------------------------------------------------
    
    function task4() {
    // Prompt the user for input
    let userInput = prompt("Enter your text:");
    
    // Convert the input to title case
    let titleCaseText = userInput.toLowerCase().replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
    
    // Display the title case text
    alert( titleCaseText);
}