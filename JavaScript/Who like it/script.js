function likes(names) {
    let namesCount = 0
    let statement = ""
    let othersCount = 0

    for (let i = 0; i < names.length; i++) {
        namesCount++
    }
    console.log("namesCount: " + namesCount)

    if (namesCount === 0) {
        statement = "no one likes this"
    } else if (namesCount === 1) {
        statement = `${names[0]} likes this`
    } else if (namesCount === 2) {
        statement = `${names[0]} and ${names[1]} like this`
    } else if (namesCount === 3) {
        statement = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (namesCount >= 4) {
        othersCount = namesCount - 2
        console.log("otherCount: " + othersCount)
        statement = `${names[0]}, ${names[1]} and ${othersCount} others like this`
    }
    console.log(statement)
    return statement
  }

likes(['Alex', 'Jacob', 'Mark', 'Max'])