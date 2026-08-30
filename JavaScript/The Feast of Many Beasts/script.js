function feast(beast, dish) {
  // I essentially need to look at the first letter of each argument and compare each other and if they match then it should pass true else false
  // get first letter of the beast argument
  const beastChar = beast.charAt(0);
  console.log("beast first letter: " + beastChar);
  // get last letter of the beast argument
  const beastCharEnd = beast.slice(-1);
  console.log("beast last letter: " + beastCharEnd);
  //get first character of the dish argument
  const dishChar = dish.charAt(0);
  console.log("dish first letter: " + dishChar);
  // get last letter of the dish argument
  const dishCharEnd = dish.slice(-1);
  console.log("dish last letter: " + dishCharEnd);

  // compare the characters, retunr true if they match and vice versa
  if ((beastChar == dishChar) & (beastCharEnd == dishCharEnd)) {
    return true;
  } else {
    return false;
  }
}
