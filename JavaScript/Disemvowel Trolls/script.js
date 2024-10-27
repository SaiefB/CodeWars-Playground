function disemvowel(str) {
    const vowels = "aeiouAEIOU"
    let split = str.split("")
    console.log(split)
    let noVowels = []
    

    for (let i = 0; i < split.length; i++) {
        if (!vowels.includes(split[i])) {
            noVowels.push(split[i])
        }
    }
    console.log(noVowels)

    let result = noVowels.join("")
    console.log(result)
    return result
}






disemvowel("This website is for losers LOL!")
