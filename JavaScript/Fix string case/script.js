function solve(s){
    let upperCaseScore = 0;
    let lowerCaseScore = 0;

    let split = s.split("")
    console.log(split)

    for (let i = 0; i < split.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            upperCaseScore++
        } else {
            lowerCaseScore++
        }
    }
    console.log(upperCaseScore)
    console.log(lowerCaseScore)

    if (lowerCaseScore >= upperCaseScore) {
        return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }
}

solve("CODe")