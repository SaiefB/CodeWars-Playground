function filter_list(l) {
    let numberArray =[]
    // Return a new array with the strings filtered out
    for (let i = 0; i < l.length; i++){
        if (Number.isInteger(l[i])) {
            numberArray.push(l[i])
        }
    }
    console.log(numberArray)
        return numberArray
  }

filter_list([1,2,'a','b'])