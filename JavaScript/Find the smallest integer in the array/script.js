function findSmallestInt(arr) {
    let sorted = arr.sort(function(a, b) {
       return a - b;
    })
    console.log("sortedArr: " + sorted)
    let smallestInt = sorted[0]
    console.log(smallestInt)
    return smallestInt
  }

findSmallestInt([34, 15, 88, 2])