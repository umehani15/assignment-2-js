// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Take input character from the user
let input = prompt("Enter a character:");

// Check if the input is a number
if (input >= '0' && input <= '9') {
    console.log("The input is a number.");
}
// Check if the input is an uppercase letter
else if (input >= 'A' && input <= 'Z') {
    console.log("The input is an uppercase letter.");
}
// Check if the input is a lowercase letter
else if (input >= 'a' && input <= 'z') {
    console.log("The input is a lowercase letter.");
}
// If the input doesn't match any of the above conditions, it's not a valid character
else {
    console.log("Invalid input.");
}

}
// ----------------------------------------task2--------------------------------------------------------
function task2() {
    // Take two inputs from the user
let firstNumber = prompt("Enter the first integer:");
let secondNumber = prompt("Enter the second integer:");

// Compare the two numbers and display the appropriate message
if (firstNumber > secondNumber) {
    console.log("The larger number is: " + firstNumber);
} else if (secondNumber > firstNumber) {
    console.log("The larger number is: " + secondNumber);
} else {
    console.log("Both numbers are equal.");
}
}

// ----------------------------------------task3--------------------------------------------------------
function task3() {
// Take input from the user
let number = prompt("Enter a number:");

// Convert the input to a number
number = Number(number);

// Check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("Invalid input. Please enter a valid number.");
}

}
// ----------------------------------------task4--------------------------------------------------------

    // Function to check if a character is a vowel
function isVowel(char) {
    // Convert the character to lowercase for case insensitive comparison
    char = char.toLowerCase();

    // List of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the character is in the list of vowels
    return vowels.includes(char);
}

// Take input from the user
let input = prompt("Enter a single character:");

// Check if the input is exactly one character long
if (input.length === 1) {
    // Check if the input character is a vowel and display the result
    if (isVowel(input)) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Please enter a single character.");
}

