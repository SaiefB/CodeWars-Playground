function positiveSum(arr) {
  let positiveArray = []
  let result = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
        positiveArray.push(arr[i])
    }
  }
  console.log("positiveArray: " + positiveArray)

  for (let i = 0; i < positiveArray.length; i++){
    positiveArray.reduce(function sum(a, b) {
        return result = a + b;
    })
  }
  console.log("Result: " + result)
  return result
  
}

positiveSum([1,-4,7,12])