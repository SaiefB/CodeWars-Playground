function highAndLow(numbers){
    let split = numbers.split(" ")
    console.log(split)
    let numberArray = []
    let highestAndLowestArr = []
    let result = ''
    

    for (let i = 0; i < split.length; i++) {
        numberArray.push(Number(split[i]))
    }
    console.log(numberArray)

    numberArray.sort(function(a, b) {
        return a - b;
    })
    console.log(numberArray)
    highestAndLowestArr.push(numberArray[numberArray.length - 1])
    highestAndLowestArr.push(numberArray[0])
    console.log(highestAndLowestArr)
    result = highestAndLowestArr.join(" ")
    console.log(result)
    return result
  }

highAndLow("1 9 3 4 -5")