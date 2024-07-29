// ----------------------------------------task1--------------------------------------------------------
function task1() {
    // Taking input from the user for table number and length
    let tableNumberInput = prompt("Enter the number for multiplication table:");
    let tableLengthInput = prompt("Enter the length of the multiplication table:");
    
    // Parsing input as numbers
    let tableNumber = Number(tableNumberInput);
    let tableLength = Number(tableLengthInput);
    
    // Checking if the inputs are valid numbers
    if (Number.isNaN(tableNumber) || Number.isNaN(tableLength)) {
        console.log("Invalid input. Please enter valid numbers.");
    } else {
        // Printing the multiplication table
        console.log("Multiplication table for " + tableNumber + ":");
        for (let i = 1; i <= tableLength; i++) {
            console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
        }
    }
    
    }
    // ----------------------------------------task2--------------------------------------------------------
    function task2() {
            const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    
            // Iterate over the array using a for loop
            for (let i = 0; i < fruits.length; i++) {
                console.log(fruits[i]);
            }
    
        }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // a. Counting: 1 to 15
    document.write("<p>Counting: ");
    for (let i = 1; i <= 15; i++) {
        document.write(i);
        if (i < 15) {
            document.write(", ");
        }
    }
    document.write("</p>");
    
    // b. Reverse counting: 10 to 1
    document.write("<p>Reverse counting: ");
    for (let i = 10; i >= 1; i--) {
        document.write(i);
        if (i > 1) {
            document.write(", ");
        }
    }
    document.write("</p>");
    
    // c. Even numbers: 0 to 20
    document.write("<p>Even: ");
    for (let i = 0; i <= 20; i += 2) {
        document.write(i);
        if (i < 20) {
            document.write(", ");
        }
    }
    document.write("</p>");
    
    // d. Odd numbers: 1 to 19
    document.write("<p>Odd: ");
    for (let i = 1; i <= 19; i += 2) {
        document.write(i);
        if (i < 19) {
            document.write(", ");
        }
    }
    document.write("</p>");
    
    // e. Series: 2k, 4k, ..., 20k
    document.write("<p>Series: ");
    for (let i = 2; i <= 20; i += 2) {
        document.write(i + "k");
        if (i < 20) {
            document.write(", ");
        }
    }
    document.write("</p>");
    
    }