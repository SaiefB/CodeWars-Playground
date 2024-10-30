function oddNumb(numArr) {
    // Uses the filter method on numArr to create a new array with only odd numbers
    return numArr.filter(function(item) {
        // For each item, checks if it's odd by using modulus 2
        return item % 2 === 1; // Returns true for odd numbers, so they are kept in the filtered array
    });
}

// Calls the oddNumb function with an array of numbers and stores the result in 'result'
let result = oddNumb([1, 2, 3, 4, 5]);

// Logs the filtered array, which contains only the odd numbers, to the console
console.log(result); // Output: [1, 3, 5]
