function squareDigits(num){
    let toString = num.toString()
    let split = toString.split('')
    let squaredArr = []
    let joinedArr = ''
    console.log("Split Array: " + split)

    for (let i = 0; i < split.length; i++){
        let squared = split[i] * split[i]
        squaredArr.push(squared)
        console.log(squaredArr)
        joinedArr = squaredArr.join('')
    }
    console.log(joinedArr)
    return Number(joinedArr)
  }
  
squareDigits(9119)