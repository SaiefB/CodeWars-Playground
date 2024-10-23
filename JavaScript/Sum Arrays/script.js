// Sum Numbers
function sum (numbers) {
    "use strict";

    let arrayTotal = 0;

    if(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            arrayTotal += numbers[i]
        }
    } else if (numbers === 0){
        arrayTotal = 0
        return arrayTotal
    }
    return arrayTotal
};