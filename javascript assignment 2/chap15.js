// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Declare and initialize a mixed array
    let mixedArray = [1, "Alice", true, 3.14, { name: "Bob" }, [2, 4, 6]];
    
    // Accessing elements in the array
    console.log(mixedArray[0]); // Output: 1
    console.log(mixedArray[1]); // Output: "Alice"
    console.log(mixedArray[4].name); // Output: "Bob"
    console.log(mixedArray[5][1]); // Output: 4
    
    // Adding a new element to the array
    mixedArray.push(false);
    
    // Display the updated array
    console.log(mixedArray); // Output: [1, "Alice", true, 3.14, { name: "Bob" }, [2, 4, 6], false]
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Declare and initialize an array with education qualifications in Pakistan
    let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    
    // Build the list of qualifications as a string
    let qualificationsText = "Qualifications:\n\n";
    for (let i = 0; i < qualifications.length; i++) {
        qualificationsText += (i + 1) + ") " + qualifications[i] + "\n";
    }
    
    // Show the qualifications in an alert
    alert(qualificationsText);
    
    }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Declare and initialize arrays for student names and their scores
    let studentNames = ["Michael", "John", "Tony"];
    let studentScores = [320, 230, 480];
    
    // Define the total marks for each student
    let totalMarks = 500;
    
    // Build the result text
    let resultText = "";
    for (let i = 0; i < studentNames.length; i++) {
        let percentage = (studentScores[i] / totalMarks) * 100;
        resultText += "Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%\n";
    }
    
    // Show the result in an alert box
    alert(resultText);
    
    }
    
    // ----------------------------------------task4--------------------------------------------------------
    
    // Initialize an array with color names
    let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
    
    // Function to display the array elements using alert
    function displayColors(message) {
        alert(message + "\nColors: " + colors.join(", "));
    }
    
    // Initial display of colors
    displayColors("Initial colors");
    
    // a. Ask the user what color to add to the beginning
    let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
    if (colorToAddBeginning) {
        colors.unshift(colorToAddBeginning);
        displayColors("After adding color to the beginning");
    }
    
    // b. Ask the user what color to add to the end
    let colorToAddEnd = prompt("Enter a color to add to the end:");
    if (colorToAddEnd) {
        colors.push(colorToAddEnd);
        displayColors("After adding color to the end");
    }
    
    // c. Add two more colors to the beginning
    colors.unshift("Pink", "Orange");
    displayColors("After adding two more colors to the beginning");
    
    // d. Delete the first color in the array
    colors.shift();
    displayColors("After deleting the first color");
    
    // e. Delete the last color in the array
    colors.pop();
    displayColors("After deleting the last color");
    
    // f. Ask the user at which index to add a color and the color name
    let indexToAdd = prompt("Enter the index at which you want to add a color:");
    let colorNameToAdd = prompt("Enter the color name to add at index " + indexToAdd + ":");
    if (indexToAdd !== null && colorNameToAdd) {
        colors.splice(Number(indexToAdd), 0, colorNameToAdd);
        displayColors("After adding a color at index " + indexToAdd);
    }
    
    // g. Ask the user at which index to delete colors and how many colors to delete
    let indexToDelete = prompt("Enter the index from which you want to delete color(s):");
    let numOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
    if (indexToDelete !== null && numOfColorsToDelete) {
        colors.splice(Number(indexToDelete), Number(numOfColorsToDelete));
        displayColors("After deleting " + numOfColorsToDelete + " color(s) from index " + indexToDelete);
    }
    
    
    
    // ----------------------------------------task5--------------------------------------------------------
    
    function task5() {
    // Array to store student scores
    let studentScores = [320, 230, 480, 120];
    
    // Display initial scores
    alert("Scores of Students: " + studentScores.join(","));
    
    // Sort the array in ascending order
    studentScores.sort((a, b) => a - b);
    
    // Display ordered scores
    alert("Ordered Scores of Students: " + studentScores.join(","));
    
    }
    
     