// ----------------------------------------task1--------------------------------------------------------

function task1() {
    const multidimensionalArray = [];
    // Example: Pushing some arrays into the multidimensional array
    multidimensionalArray.push([1, 2, 3]);
    multidimensionalArray.push([4, 5, 6]);
    
    // Manually convert the multidimensional array to a string
    let arrayString = "[";
    
    for (let i = 0; i < multidimensionalArray.length; i++) {
        arrayString += "[";
        for (let j = 0; j < multidimensionalArray[i].length; j++) {
            arrayString += multidimensionalArray[i][j];
            if (j < multidimensionalArray[i].length - 1) {
                arrayString += ", ";
            }
        }
        arrayString += "]";
        if (i < multidimensionalArray.length - 1) {
            arrayString += ", ";
        }
    }
    
    arrayString += "]";
    
    // Display the result in an alert dialog
    alert(arrayString);
    
    }
    
    // ----------------------------------------task2--------------------------------------------------------
    
    function task2() {
        let matrix = [
            [0, 1, 2, 3],
            [1, 0, 1, 2],
            [2, 1, 0, 1]
        ];
    
        let matrixString = '';
    
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrixString += matrix[i][j] + ' ';
            }
            matrixString += '\n';
        }
    
        alert(matrixString);
    }
    
    // ----------------------------------------task3--------------------------------------------------------
    
    function task3() {
    // Using a for loop
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    }
    