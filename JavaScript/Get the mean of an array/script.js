function getAverage(marks) {
  // get the sum of all the numbers in the array
  const sum = marks.reduce(
    (accumulater, currentValue) => accumulater + currentValue,
    0,
  );
  console.log("sum: " + sum);
  // divide by the number of array items length
  const mean = sum / marks.length;
  console.log("mean: " + mean);
  //round down the number
  const roundedMean = Math.floor(mean);
  console.log("RoundedMean: " + roundedMean);
  return roundedMean;
}
