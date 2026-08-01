function arrayPlusArray(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  return arr2.reduce((a, b) => a + b, 0);
}
