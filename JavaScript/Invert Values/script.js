function invert(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    let currentNum = array[i] * -1;
    newArray.push(currentNum);
  }
  return newArray;
}
