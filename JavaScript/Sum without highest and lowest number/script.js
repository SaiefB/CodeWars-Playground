function sumArray(array) {
  if (array == null || array.length < 3) {
    console.log("Invalid array returning 0");
    return 0;
  } else {
    console.log("Valid array continuing...");
    array.sort(function (a, b) {
      return a - b;
    });
    console.log("Sorted array: " + array);

    array.splice([0], 1);
    array.pop();
    console.log("spliced and popped array: " + array);
    return array.reduce((a, b) => a + b, 0);
  }
}
