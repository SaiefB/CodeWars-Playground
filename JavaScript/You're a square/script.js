var isSquare = function(n){
    let result = n > 0 && Math.sqrt(n) % 1 === 0;
    console.log(result)
    if (n === 0) {
        return true
    } else if (n < 0) {
        return false
    } else {
        return result
    }
  }

  isSquare(25)