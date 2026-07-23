function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  } else {
    let positiveNum = [];
    let negativeNum = [];
    for (i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveNum.push(input[i]);
        console.log(`positiveNum array: ${positiveNum}`);
      } else {
        negativeNum.push(input[i]);
        console.log(`negativeNum array: ${negativeNum}`);
      }
    }

    let positiveResult = positiveNum.length;
    console.log("positiveResult: " + positiveResult);

    let negSum = 0;
    let negativeResult = negativeNum.forEach((num) => {
      negSum += num;
    });
    console.log("negativeResult: " + negativeResult);
    console.log("negSum: " + negSum);

    let finalArray = [];
    finalArray.push(positiveResult);
    console.log(`finalArray: ${finalArray}`);
    finalArray.push(negSum);
    console.log(`finalArray: ${finalArray}`);

    return finalArray;
  }
}
