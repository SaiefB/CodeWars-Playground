/* function opposite(number) {
    let result = 0

    if (number < 0) {
        result += number
    } else {
        result -= number
    }
    return result
  } */

    function opposite(number) {
        let result = 0
    
        if (number < 0) {
            number.replace('-', "")
            result += number
            console.log("addMinus: " + number)
        } else {
            number = "-" + number
            result += number
            console.log("removeMinus: " + number)
        }
        return result
      }