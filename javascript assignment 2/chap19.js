// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Define the array
    const A = ["cake", "apple pie", "cookie", "chips", "patties"];

    // Get user input
    const userInput = prompt("Enter an item to search:").toLowerCase(); // Convert input to lowercase for case-insensitive comparison

    // Check if the item exists in the array
    if (A.includes(userInput)) {
        alert(`Yes, '${userInput}' is found in the list.`);
    } else {
        alert(`No, '${userInput}' is not found in the list.`);
    }

    }
// ----------------------------------------task2--------------------------------------------------------

function task2() {
// Define the array
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Get user input
const userInput = prompt("Enter an item to search:").toLowerCase(); // Convert input to lowercase for case-insensitive comparison

// Check if the item exists in the array
if (A.includes(userInput)) {
    alert(`Yes, '${userInput}' is found in the list.`);
} else {
    alert(`No, '${userInput}' is not found in the list.`);
}

}

