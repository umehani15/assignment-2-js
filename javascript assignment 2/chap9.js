// ----------------------------------------task1--------------------------------------------------------
function task1() {
    // Convert city name to lowercase for case-insensitive comparison
    let cityName = prompt("Enter the city Name (karachi, lahore, islamabad):").toLowerCase();


    // Check which city is entered and return the corresponding welcome message
    let Message;
    switch (cityName) {
        case "karachi":
            Message ="Welcome to the city of lights!";
            break;
        case "islamabad":
            Message ="Welcome to the capital city of the Islamic Republic of Pakistan.";
            break;
        case "lahore":
            Message ="Welcome to the capital and largest city of the Pakistani province of Punjab.";
            break;
        case "sargodha":
            Message ="Welcome to the City of Eagles.";
            break;
        case "peshawar":
            Message ="Welcome to the sixth most populous city of Pakistan, with a population of over 4.7 million in the 2023 census.";
            break;
            default:
            Message ="Welcome to " + cityName + ".";
    }
     // Show the message in an alert box
     alert(Message);
}

// ----------------------------------------task2--------------------------------------------------------
    function task2() {
        // Prompt the user to enter their gender
        let gender = prompt("Enter your gender:").toLowerCase();

        // Check the entered gender and display the corresponding message
        if (gender === "male") {
            alert("Good Morning Sir");
        } else if (gender === "female") {
            alert("Good Morning Ma’am");
        } else {
            alert("Invalid input. Please enter 'male' or 'female'.");
        }
    }

    // ----------------------------------------task3--------------------------------------------------------
    function task3() {
    // Prompt the user to enter the traffic signal color
    let color = prompt("Enter the traffic signal color (Red, Yellow, Green):").toLowerCase();

    // Determine the message based on the color
    let message;
    switch(color) {
        case 'red':
            message = 'Must Stop';
            break;
        case 'yellow':
            message = 'Ready to move';
            break;
        case 'green':
            message = 'Move now';
            break;
        default:
            message = 'Invalid color. Please enter Red, Yellow, or Green.';
    }

    // Show the message in an alert box
    alert(message);
    }

    // ----------------------------------------task4--------------------------------------------------------

    function task4() {
        // Prompt the user to enter the remaining fuel in litres
        let fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

        // Check if the input is a valid number and is less than 0.25 litres
        if (!isNaN(fuel) && fuel < 0.25) {
            alert("Please refill the fuel in your car");
        } else if (!isNaN(fuel)) {
            alert("You have enough fuel");
        } else {
            alert("Invalid input. Please enter a number.");
        }
    }

