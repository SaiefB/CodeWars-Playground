function solution(str){
  let split = str.split('');
  console.log(`Split: ${split}`)
  let reverse = split.reverse();
  console.log(`Reverse: ${reverse}`)
  let join = reverse.join('');
  console.log(`Join: ${join}`)
  return join
};

/* function solution(str){
    return str.split('').reverse().join('');  
  } */

solution("world")