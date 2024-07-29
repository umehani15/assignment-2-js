// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Prompt the user to enter their first name
    let firstName = prompt("Enter your first name:");
    
    // Prompt the user to enter their last name
    let lastName = prompt("Enter your last name:");
    
    // Merge the first name and last name into a new variable fullName
    let fullName = firstName + " " + lastName;
    
    // Greet the user using their full name
    alert("Hello, " + fullName + "! Welcome!");
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Prompt the user for input
    let phoneModel = prompt("Enter your favorite mobile phone model:");
    
    // Calculate the length of the input
    let length = phoneModel.length;
    
    // Display the length in an alert
    alert("Length of your input: " + length);
    
    }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Define the word
    let word = "Pakistani";
    
    // Find the index of letter 'n'
    let index = word.indexOf('n');
    
    // Display the result in an alert
    alert("Index of 'n' in 'Pakistani': " + index);
    
    }
    
    