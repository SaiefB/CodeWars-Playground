function fakeBin(x) {
  let newArray = [];

  for (i = 0; i < x.length; i++) {
    if (x[i] >= 5) {
      newArray.push(1);
    } else {
      newArray.push(0);
    }
    console.log(newArray);
  }
  let result = newArray.join("");
  console.log(result);
  return result;
}
