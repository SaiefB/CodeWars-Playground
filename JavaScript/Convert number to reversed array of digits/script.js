function digitize(n) {
  let toStr = n.toString();
  console.log(toStr);
  let array = toStr.split("");
  console.log(array);
  let reversedArray = array.reverse();
  console.log(reversedArray);
  let toNumber = reversedArray.map(Number);
  console.log(toNumber);
  return toNumber;
}

digitize(12345);
