// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Given array
    let A = [24, 53, 78, 91, 12];
    
    // Initialize a variable to store the largest number, assuming the first number is the largest
    let largestNumber = A[0];
    
    // Loop through the array to compare each element with the current largest number
    for (let i = 1; i < A.length; i++) {
        if (A[i] > largestNumber) {
            largestNumber = A[i];
        }
    }
    
    // Output the largest number
    console.log("The largest number in the array is: " + largestNumber);
    
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Given array
    let A = [24, 53, 78, 91, 12];
    
    // Initialize a variable to store the smallest number, assuming the first number is the smallest
    let smallestNumber = A[0];
    
    // Loop through the array to compare each element with the current smallest number
    for (let i = 1; i < A.length; i++) {
        if (A[i] < smallestNumber) {
            smallestNumber = A[i];
        }
    }
    
    // Output the smallest number
    console.log("The smallest number in the array is: " + smallestNumber);
    
    }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Using a for loop to iterate from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Check if the number is a multiple of 5
        if (i % 5 === 0) {
            console.log(i);
        }
    }
    
    }
    