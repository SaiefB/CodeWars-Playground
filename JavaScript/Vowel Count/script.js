function getCount(str) {
    let splitArray = str.split('')
    let vowelArray = []
    console.log("splitArray1: " + splitArray)

    for (let i = 0; i < splitArray.length; i++){
        if (splitArray[i] === 'a' || splitArray[i] === 'e' || splitArray[i] === 'i' || splitArray[i] === 'o' || splitArray[i] === 'u') {
            console.log(splitArray[i])
            vowelArray.push(splitArray[i])
        }
        console.log("vowelArray: " + vowelArray)
    }
    console.log(vowelArray.length)
    return vowelArray.length
  };

  getCount("abracadabra")