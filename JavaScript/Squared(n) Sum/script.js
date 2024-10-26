function squareSum(numbers){
    let squaredNum = 0;
    let sum = [];
    let result = 0;

    console.log("squaredNum1: " + squaredNum)

    for (let i = 0; i < numbers.length; i++) {
        squaredNum = numbers[i] * numbers[i]
        sum.push(squaredNum)
    }

    console.log("squaredNum2: " + squaredNum)
    console.log("sum: " + sum)


    for (let i = 0; i < sum.length; i++) {
        result = result + sum[i]
    }
    console.log("result: " + result)
    return result
}

squareSum([1,2])