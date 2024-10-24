const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let totalFuel = mpg * fuelLeft;
    if (totalFuel >= distanceToPump) {
        return true
    } else {
        return false
    }
  };