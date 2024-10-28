function descendingOrder(n){
    let split = n.toString().split('').sort(function(a, b) {
      return b - a
    }).join('')
    console.log(split)
    return Number(split)
  }

descendingOrder(123456789)