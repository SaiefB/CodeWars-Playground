function invert(array) {
  // iterate through array
  // if item is < 0 then value * 2 and + to item
  // then add item to new array
  // return array
  // if item is > 0 then value * 2 and - to item
  // then add item to new array
  // return array
  let newArray = [];
  let currentNum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      console.log("array item less than 0");
      currentNum += array[i] * 2;
      console.log("current num: " + currentNum);
      newArray.push(array[i]);
      console.log(newArray);
    }
  }
}
