function solution(str){
  let split = str.split('');
  console.log(`Split: ${split}`)
  let reverse = split.reverse();
  console.log(`Reverse: ${reverse}`)
  let join = reverse.join('');
  console.log(`Join: ${join}`)
  return join
};

solution("world")