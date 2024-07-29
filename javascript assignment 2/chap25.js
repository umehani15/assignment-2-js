// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Define the string
    let university = "University of Karachi";
    
    // Convert the string to an array using split method
    let universityArray = university.split(" ");
    
    // Display the elements of the array in the browser
    alert("Array Elements: " + universityArray.join(", "));
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Prompt the user for input
    let userInput = prompt("Enter a string:");
    
    // Check if the user input is not empty
    if (userInput !== null && userInput !== "") {
        // Get the last character of the user input
        let lastCharacter = userInput[userInput.length - 1];
    
        // Display the last character
        alert("Last character: " + lastCharacter);
    } else {
        alert("Invalid input. Please enter a non-empty string.");
    }
    
    }
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Define the string
    let sentence = "The quick brown fox jumps over the lazy dog";
    
    // Convert the string to lowercase for case-insensitive comparison
    let lowercaseSentence = sentence.toLowerCase();
    
    // Define the word to search for
    let wordToSearch = "the";
    
    // Split the sentence into words
    let words = lowercaseSentence.split(" ");
    
    // Count the number of occurrences of the word "the"
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordToSearch) {
            count++;
        }
    }
    
    // Display the number of occurrences of the word "the"
    alert("Number of occurrences of 'the': " + count);
    
    }