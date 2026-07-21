function century(year) {
  let result = Math.ceil(year / 100) * 100;
  console.log(result);
  let yearString = result.toString();
  console.log(yearString);
  let yearArray = yearString.split("");
  console.log(yearArray);
  let yearTwoDigits = yearArray[0] + yearArray[1];
  console.log(yearTwoDigits);
  let yearNumber = Number(yearTwoDigits);
  console.log(yearNumber);
  return yearNumber;
}

/* function century(year) {
  let result = Math.cell(year / 100);
  return result;
} */
