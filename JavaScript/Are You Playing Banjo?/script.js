function areYouPlayingBanjo(name) {
  let firstLetter = name.charAt(0);
  console.log(firstLetter);
  if (firstLetter === "R" || firstLetter === "r") {
    console.log(name + " plays banjo");
    return name + " plays banjo";
  } else {
    console.log(name + " does not play banjo");
    return name + " does not play banjo";
  }
}

areYouPlayingBanjo("rolf");
