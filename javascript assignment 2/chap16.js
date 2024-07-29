// ----------------------------------------task1--------------------------------------------------------

function task1() {
    // Initialize an array with city names
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    
    // Copy elements from cities array to selectedCities array
    let selectedCities = cities.slice(2, 4); // Copying "Islamabad" and "Quetta"
    
    // Display the cities list
    alert("Cities list: " + cities.join(","));
    
    // Display the selected cities list
    alert("Selected cities list: " + selectedCities.join(","));
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
    // Initialize the array
    let arr = ["This ", " is ", " my ", " cat"];
    
    // Create a single string from the array
    let singleString = arr.join("");
    
    // Display the single string
    console.log(singleString);
    alert(singleString);
    
    }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
        const myQueue = [];
    
        // Enqueue items
        myQueue.push(1);
        myQueue.push(2);
        myQueue.push(3);
    
        // Size of the queue
        console.log("Size of the queue:", myQueue.length);
    
        // Dequeue items
        console.log("Dequeuing:", myQueue.shift()); // Should dequeue 1
        console.log("Dequeuing:", myQueue.shift()); // Should dequeue 2
        console.log("Dequeuing:", myQueue.shift()); // Should dequeue 3
    
        // Size of the queue after dequeue operations
        console.log("Size of the queue after dequeue operations:", myQueue.length);
    
    }
    
    // ----------------------------------------task4--------------------------------------------------------
    
    function task4() {
        const myStack = [];
    
        // Add items to the top of the stack
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
    
        console.log("Stack:", myStack);
    
        // Remove and return the top item from the stack
        console.log("Popping:", myStack.pop()); // Should pop 3
        console.log("Popping:", myStack.pop()); // Should pop 2
        console.log("Popping:", myStack.pop()); // Should pop 1
        console.log("Stack after popping:", myStack);
    
    }
    
    // ----------------------------------------task5--------------------------------------------------------
    
    function task5() {
    // Array of phone manufacturers
    const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    
    // Start building the select element
    let selectHTML = "<select>";
    
    // Iterate through the array and create an option element for each manufacturer
    phoneManufacturers.forEach(manufacturer => {
        selectHTML += `<option value="${manufacturer}">${manufacturer}</option>`;
    });
    
    // Close the select element
    selectHTML += "</select>";
    
    // Write the select element to the document
    document.write(selectHTML);
    
}