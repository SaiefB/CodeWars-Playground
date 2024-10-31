/* function digitalRoot(n) {
    while (n > 10) {
      n = n.toString().split('').reduce((acc, curr) => acc + Number(curr), 0)
    }
    console.log(n)
    return n
  }

digitalRoot(16) */

function digitalRoot(n) {
  let stringArray = ''
  let splitArray = []
  let sumArray = 0
  while (n >= 10) {
    stringArray = n.toString();
    splitArray = stringArray.split('');
    sumArray = splitArray.reduce((acc, curr) => acc + Number(curr), 0)
    n = sumArray
  }
  console.log(n)
  return n
}

digitalRoot(16)