function betterThanAverage(classPoints, yourPoints) {
  const initialValue = 0;
  console.log("Initial Value: " + initialValue);
  const sumWithInitial = classPoints.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  console.log("Sum with initial value: " + sumWithInitial);
  const average = sumWithInitial / classPoints.length;
  console.log("Average: " + average);
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}
