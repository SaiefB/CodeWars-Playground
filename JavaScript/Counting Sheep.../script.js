function countSheeps(sheep) {
    let filteredArr = sheep.filter((e) => e === true);
    console.log(filteredArr)
    console.log(filteredArr.length)
    return filteredArr.length
  }

  countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true])