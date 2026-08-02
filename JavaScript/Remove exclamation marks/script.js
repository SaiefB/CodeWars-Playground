function removeExclamationMarks(s) {
  console.log("s string: " + s);
  let strSplit = s.split("");
  console.log("strSplit: " + strSplit);
  let filter = strSplit.filter((char) => char !== "!");
  console.log("filtered array: " + filter);
  let result = filter.join("");
  console.log("joined string: " + result);
  return result;
}
