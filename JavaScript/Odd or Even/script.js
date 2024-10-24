function oddOrEven(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }

    console.log(`Sum: ${sum}`)

    if (sum % 2 === 0) {
        console.log("even")
        return "even"
    } else {
        console.log("odd")
        return "odd"
    }
 }



 oddOrEven([0, 1, 4])