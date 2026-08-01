function removeExclamationMarks(s) {
  console.log("s string: " + s);
  let strSplit = s.split("");
  let strSpliced = [];
  console.log("strSplit: " + strSplit);

  for (i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === "!") {
      strSpliced = strSplit.splice(strSplit[i], 1);
      console.log(strSpliced);
    }
  }
  console.log("strSpliced: " + strSpliced);
}
