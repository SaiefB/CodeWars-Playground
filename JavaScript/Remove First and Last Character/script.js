function removeChar(str){

    let splitString = str.split('');
        console.log("splitString: " + splitString);
    let removeFirstChar = splitString.shift()
        console.log("removeFirstChar: " + splitString)
    let removeLastChar = splitString.pop()
        console.log("removeLastChar" + splitString)
    
    let joinedString = splitString.join('')
        console.log(joinedString)

    return joinedString
    
   };
   
removeChar('hootki')
   
   
/* function removeChar(str) {
    return str.slice(1, -1);
  } */