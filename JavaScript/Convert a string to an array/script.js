function stringToArray(string){
    newArray = [];
    let split = string.split(" ")
    console.log(split)
    
    for (let i = 0; i < split.length; i++){
        newArray.push(split[i])
    }
    console.log(newArray)
    return newArray
}

stringToArray("I love arrays they are my favorite")