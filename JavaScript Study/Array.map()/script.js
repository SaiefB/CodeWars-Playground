function removeLastLetter(array) {
    // Calls the map method on the array, processing each element with the function
    return array.map(function(element) {
        // Splits each string element into an array of characters
        let split = element.split('');
        console.log("split: " + split); // Logs the array of characters to the console

        // Removes the last character by slicing from the start to the second-to-last element
        let slicedArr = split.slice(0, -1);
        console.log("slicedArr: " + slicedArr); // Logs the sliced array to the console

        // Joins the sliced array back into a string, removing the last character
        let joinedArr = slicedArr.join('');
        console.log(joinedArr); // Logs the modified string without the last character

        // Returns the modified string to form the new array of processed elements
        return joinedArr;
    });
}

// Calls removeLastLetter with an array of words and stores the result in 'result'
let result = removeLastLetter(["one", "two", "three", "four", "five"]);

// Logs the final result array, with each word missing the last letter
console.log(result); // Output: ['on', 'tw', 'thre', 'fou', 'fiv']
