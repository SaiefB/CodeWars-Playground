function findShort(s){
    const split = s.split(' ')
    console.log(split)
    const wordLengths = split.map(word => word.length);
    console.log(wordLengths)
    const sortedArr = wordLengths.sort((a, b) => a - b);
    console.log(sortedArr)
    console.log(sortedArr[0])
    return sortedArr[0]
}

findShort("bitcoin take over the world maybe who knows perhaps")