// ----------------------------------------task1--------------------------------------------------------
function task1() {

    // Part a: Checking condition for variable a
    let a = 4;
    if (++a === 5){ // Pre-increment a and check if it's equal to 5
        alert("given condition for variable a is true"); // If condition is true, display alert
    }

    // Part b: Checking condition for variable b
    let b = 82;
    if (b++ === 83){ // Post-increment b and check if it's equal to 83
        alert("given condition for variable b is true"); // If condition is true, display alert
    }

    // Part c: Checking multiple conditions for variable c
    let c = 12;
    if (c++ === 13){ // Post-increment c and check if it's equal to 13
        alert("condition 1 is true"); // If condition is true, display alert
    }
    if (c === 13){ // Check if c is equal to 13
        alert("condition 2 is true"); // If condition is true, display alert
    }
    if (++c < 14){ // Pre-increment c and check if it's less than 14
        alert("condition 3 is true"); // If condition is true, display alert
    }
    if(c === 14){ // Check if c is equal to 14
        alert("condition 4 is true"); // If condition is true, display alert
    }

    // Part d: Comparing total cost
    let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){ // Check if total cost is equal to sum of material cost and labor cost
        alert("The cost equals"); // If condition is true, display alert
    }

    // Part e: Displaying true regardless of condition
    if (true){ // This condition will always be true
        alert("True"); // Display alert
    }

    // Part f: Comparing strings lexically
    if("car" < "cat"){ // Lexicographically comparing "car" and "cat"
        alert("car is smaller than cat"); // If condition is true, display alert
    }
}

// ----------------------------------------task2--------------------------------------------------------

        function computeGradeAndRemarks(percentage) {
            let grade, remarks;
            if (percentage >= 80) {
                grade = "A-one";
                remarks = "Excellent";
            } else if (percentage >= 70) {
                grade = "A";
                remarks = "Good";
            } else if (percentage >= 60) {
                grade = "B";
                remarks = "You need to improve";
            } else {
                grade = "Fail";
                remarks = "Sorry";
            }
            return { grade, remarks };
        }
// ----------------------------------------task3--------------------------------------------------------

        function computeResults() {
            // Get input values from user
            let subject1 = Number(prompt("Enter marks obtained in Subject 1:"));
            let subject2 = Number(prompt("Enter marks obtained in Subject 2:"));
            let subject3 = Number(prompt("Enter marks obtained in Subject 3:"));
            let totalMarks = Number(prompt("Enter total marks:"));

            // Calculate total obtained marks
            let marksObtained = subject1 + subject2 + subject3;

            // Calculate percentage
            let percentage = (marksObtained / totalMarks) * 100;

            // Get grade and remarks
            let { grade, remarks } = computeGradeAndRemarks(percentage);

            // Display the results using alert
            alert("Marks Sheet\n" +
                  `Total marks: ${totalMarks}\n` +
                  `Marks obtained: ${marksObtained}\n` +
                  `Percentage: ${percentage.toFixed(2)}%\n` +
                  `Grade: ${grade}\n` +
                  `Remarks: ${remarks}`);
        }

// ----------------------------------------task4--------------------------------------------------------
function task4() {
    // Take input from the user
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

// Convert input to numbers using the "+" operator
firstNumber = +firstNumber;
secondNumber = +secondNumber;

// Perform the operation based on the operator entered by the user
if (operation === '+') {
    result = firstNumber + secondNumber; // Addition
} else if (operation === '-') {
    result = firstNumber - secondNumber; // Subtraction
} else if (operation === '*') {
    result = firstNumber * secondNumber; // Multiplication
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber; // Division
    } else {
        result = "Cannot divide by zero!";
    }
} else if (operation === '%') {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber; // Modulos
    } else {
        result = "Cannot modulo by zero!";
    }
} else {
    result = "Invalid operation!";
}

// Display the result to the user
alert("Result: " + result);

}

