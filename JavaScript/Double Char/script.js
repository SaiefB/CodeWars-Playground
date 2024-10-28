function doubleChar(str) {
    let split = str.split('')
    console.log(split)
    resultArray = []

    for (let i = 0; i < split.length; i++){
        resultArray.push(split[i])
        resultArray.push(split[i])
      }
      console.log(resultArray)
      return resultArray.join('')
  }
  
  doubleChar("String")