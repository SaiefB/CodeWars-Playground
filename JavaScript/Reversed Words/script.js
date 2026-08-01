function reverseWords(str) {
  console.log(str);
  let strSplit = str.split(" ");
  console.log("strSplit: " + strSplit);
  let strReverse = strSplit.reverse();
  console.log(`strReversed: ${strReverse}`);
  let strJoin = strReverse.join(" ");
  console.log(`strJoin: ${strJoin}`);
  return strJoin;
}
