function sumMix(x) {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    if (Number.isInteger(x[i])) {
      sum += x[i];
    } else {
      let converted = Number(x[i]);
      sum += converted;
    }
  }
  return sum;
}

// receive an array of strings and integers all of numbers. loop through array and turn all strings to integers. then sum the array and return result.
