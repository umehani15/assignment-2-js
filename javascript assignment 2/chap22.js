// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Define the word
    let word = "Hello World";
    
    // Find the last index of letter 'l'
    let lastIndex = word.lastIndexOf('l');
    
    // Display the result in an alert
    alert("Last index of 'l' in 'Hello World': " + lastIndex);
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Define the word
    let word = "Pakistani";
    
    // Find the character at the 3rd index
    let character = word.charAt(3);
    
    // Display the result in an alert
    alert("Character at 3rd index in 'Pakistani': " + character);
    
    }
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Using a for loop and concat() method
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result = result.concat(i.toString(), "\n");
    }
    
    // Displaying the result
    console.log(result);
    
    }
    // ----------------------------------------task4--------------------------------------------------------
    
    function task4() {
    // Define the word
    let word = "Hyderabad";
    
    // Replace "Hyder" with "Islam"
    let replacedWord = word.replace("Hyder", "Islam");
    
    // Display the result in an alert
    alert("Original Word: " + word + "\nReplaced Word: " + replacedWord);
    
    }